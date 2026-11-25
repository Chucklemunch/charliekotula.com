// Pulls every public post from each Substack publication listed in
// src/blog/publications.json and writes cleaned, self-contained copies to
// public/blog/ so the site can render them directly.
//
//   npm run fetch-posts
//
// Output, per publication id:
//   public/blog/<id>/index.json        list of posts (metadata only), newest first
//   public/blog/<id>/posts/<slug>.json full post with cleaned body HTML

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import sanitizeHtml from "sanitize-html";
import katex from "katex";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "blog");
const PUBLICATIONS = JSON.parse(await fs.readFile(path.join(ROOT, "src", "blog", "publications.json"), "utf8"));
const UA = { "User-Agent": "Mozilla/5.0 (charliekotula.com blog sync)" };

async function getText(url) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${res.status} fetching ${url}`);
  return res.text();
}

const getJson = async (url) => JSON.parse(await getText(url));

const stripScheme = (url) => url.replace(/^https?:\/\//, "");

// Rewrites a link that points at one of the publications (current or old address):
//   a post        -> the on-site copy, e.g. /blog/ypgg/<slug>
//   anything else -> the same path on the publication's current address
// Returns null for links that aren't to a publication.
function rewritePublicationLink(href) {
  const target = stripScheme(href);
  for (const pub of PUBLICATIONS) {
    for (const base of [pub.url, ...(pub.previousUrls || [])]) {
      const host = stripScheme(base);
      if (!target.startsWith(host)) continue;
      const rest = target.slice(host.length);
      if (rest && !/^[/?#]/.test(rest)) continue; // e.g. host.evil.com
      const post = rest.match(/^\/p\/([^/?#]+)/);
      if (post) return `/blog/${pub.id}/${post[1]}`;
      return `${pub.url}${rest}`;
    }
  }
  return null;
}

// Every post slug in a publication: the paginated archive API, plus the
// sitemap as a backup (new publications may not have one yet).
async function listSlugs(pubUrl) {
  const slugs = new Set();
  let cursor = null;
  for (let page = 0; page < 100; page++) {
    const d = await getJson(`${pubUrl}/api/v1/archive?sort=new${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ""}`);
    for (const p of d.posts || []) slugs.add(p.slug);
    cursor = d.nextCursor;
    if (!cursor) break;
  }
  try {
    const sitemap = await getText(`${pubUrl}/sitemap.xml`);
    for (const m of sitemap.matchAll(/<loc>[^<]*\/p\/([^<\/?#]+)<\/loc>/g)) slugs.add(m[1]);
  } catch {
    // No sitemap; the archive is enough.
  }
  return [...slugs];
}

// Route an image through Substack's CDN so formats like HEIC get converted
// to something browsers can display.
const cdnImage = (src, width = 1200) =>
  `https://substackcdn.com/image/fetch/w_${width},c_limit,f_auto,q_auto:good/${encodeURIComponent(src)}`;

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function parseAttrs(el, $) {
  try {
    return JSON.parse($(el).attr("data-attrs") || "{}");
  } catch {
    return {};
  }
}

function cleanBody(html, postUrl) {
  const $ = cheerio.load(html || "", null, false);

  // Substack UI chrome that means nothing outside Substack.
  $("button, svg, form, input, .subscription-widget-wrap-editor, .subscription-widget, .image-link-expand").remove();

  // Links to any of the publications -> on-site copies / current addresses.
  $("a[href]").each((_, el) => {
    const rewritten = rewritePublicationLink($(el).attr("href"));
    if (rewritten) $(el).attr("href", rewritten);
  });

  // Image galleries -> a row of figures.
  $(".image-gallery-embed").each((_, el) => {
    const { gallery } = parseAttrs(el, $);
    const imgs = (gallery?.images || [])
      .map((img) => `<img src="${escapeHtml(cdnImage(img.src, 800))}" alt="" loading="lazy">`)
      .join("");
    const caption = gallery?.caption ? `<figcaption>${escapeHtml(gallery.caption)}</figcaption>` : "";
    $(el).replaceWith(imgs ? `<figure class="gallery">${imgs}${caption}</figure>` : "");
  });

  // Embedded tweets -> a quoted block.
  $(".twitter-embed").each((_, el) => {
    const t = parseAttrs(el, $);
    if (!t.full_text) return void $(el).remove();
    const text = escapeHtml(t.full_text).replace(/\n/g, "<br>");
    const who = escapeHtml(`${t.name || ""} (@${t.username || ""})`);
    $(el).replaceWith(
      `<blockquote class="tweet"><p>${text}</p><p>— <a href="${escapeHtml(t.url)}">${who}</a></p></blockquote>`
    );
  });

  // LaTeX blocks -> MathML (browsers render it natively, no extra CSS needed).
  $(".latex-rendered").each((_, el) => {
    const expr = parseAttrs(el, $).persistentExpression;
    if (!expr) return void $(el).remove();
    $(el).replaceWith(
      `<div class="math">${katex.renderToString(expr, { displayMode: true, output: "mathml", throwOnError: false })}</div>`
    );
  });

  // Audio lives on Substack; point readers there.
  $(".native-audio-embed").each((_, el) => {
    $(el).replaceWith(
      `<p class="audio-note"><em>This post includes audio — <a href="${escapeHtml(postUrl)}">listen on Substack</a>.</em></p>`
    );
  });

  // Images inside figures: drop Substack's <picture>/<source> wrappers, keep a single img.
  $("picture").each((_, el) => {
    const img = $(el).find("img").first();
    $(el).replaceWith(img.length ? $.html(img) : "");
  });
  $("a.image-link").each((_, el) => {
    $(el).replaceWith($(el).html() || "");
  });
  $("img").each((_, el) => {
    const img = $(el);
    for (const attr of ["srcset", "sizes", "width", "height", "class", "data-attrs", "title"]) img.removeAttr(attr);
    img.attr("loading", "lazy");
  });

  // Strip empty paragraphs.
  $("p").each((_, el) => {
    if (!$(el).text().trim() && !$(el).find("img, br").length) $(el).remove();
  });

  return sanitizeHtml($.html(), {
    allowedTags: [
      "p", "br", "hr", "strong", "b", "em", "i", "u", "s", "sub", "sup", "a", "ul", "ol", "li",
      "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "figure", "figcaption", "img", "div", "span",
      "pre", "code",
      // MathML from KaTeX
      "math", "semantics", "mrow", "mi", "mo", "mn", "msup", "msub", "msubsup", "mfrac", "munderover",
      "munder", "mover", "msqrt", "mroot", "mtext", "mspace", "mstyle", "annotation",
    ],
    allowedAttributes: {
      a: ["href", "id", "class"],
      img: ["src", "alt", "loading"],
      div: ["class", "id"],
      span: ["class"],
      p: ["class"],
      figure: ["class"],
      blockquote: ["class"],
      math: ["xmlns", "display"],
      annotation: ["encoding"],
      mo: ["stretchy", "fence", "separator", "lspace", "rspace"],
      mstyle: ["displaystyle", "scriptlevel"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedClasses: {
      div: ["footnote", "footnote-content", "math", "captioned-image-container"],
      a: ["footnote-anchor", "footnote-number"],
      p: ["audio-note"],
      figure: ["gallery"],
      blockquote: ["tweet"],
    },
    transformTags: {
      // External links open in a new tab; in-page footnote and on-site links don't.
      a: (tagName, attribs) => {
        const href = attribs.href || "";
        const external = /^https?:/.test(href);
        return {
          tagName,
          attribs: external ? { ...attribs, target: "_blank", rel: "noopener noreferrer" } : attribs,
        };
      },
    },
  });
}

async function syncPublication(pub) {
  const pubDir = path.join(OUT_DIR, pub.id);
  const postsDir = path.join(pubDir, "posts");
  const slugs = await listSlugs(pub.url);
  console.log(`${pub.name}: found ${slugs.length} posts`);

  await fs.rm(pubDir, { recursive: true, force: true });
  await fs.mkdir(postsDir, { recursive: true });

  const index = [];
  for (const slug of slugs) {
    const post = await getJson(`${pub.url}/api/v1/posts/${slug}`);
    if (post.audience !== "everyone" || !post.body_html) {
      console.log(`  skip ${slug} (not public)`);
      continue;
    }
    const url = post.canonical_url || `${pub.url}/p/${slug}`;
    const html = cleanBody(post.body_html, url);
    // Substack's own wordcount field is unreliable, so count from the cleaned text.
    const text = cheerio.load(html, null, false).root().text();
    const wordcount = (text.match(/\S+/g) || []).length;
    const meta = {
      slug,
      title: post.title?.trim(),
      subtitle: post.subtitle?.trim() || "",
      date: post.post_date,
      wordcount,
      coverImage: post.cover_image || null,
      url,
    };
    await fs.writeFile(path.join(postsDir, `${slug}.json`), JSON.stringify({ ...meta, html }));
    index.push(meta);
    console.log(`  ok   ${slug}`);
  }

  index.sort((a, b) => new Date(b.date) - new Date(a.date));
  await fs.writeFile(path.join(pubDir, "index.json"), JSON.stringify(index, null, 2));
  console.log(`  wrote ${index.length} posts to ${path.relative(ROOT, pubDir)}/`);
}

async function main() {
  for (const pub of PUBLICATIONS) await syncPublication(pub);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
