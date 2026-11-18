import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Button, CircularProgress, Divider, Link, Typography } from "@mui/material";
import SiteHeader from "../SiteHeader";
import { Post, formatDate, readingTime } from "./types";
import { findPublication } from "./publications";
import "./Blog.css";

const BlogPostPage: React.FC = () => {
  const { pub: pubId, slug } = useParams();
  const pub = findPublication(pubId);
  const [post, setPost] = useState<Post | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setPost(null);
    setNotFound(false);
    window.scrollTo(0, 0);
    // Slugs come from the URL; only allow the characters Substack uses.
    if (!pub || !slug || !/^[a-z0-9-]+$/.test(slug)) {
      setNotFound(true);
      return;
    }
    fetch(`/blog/${pub.id}/posts/${slug}.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((p: Post) => {
        setPost(p);
        document.title = `${p.title} · Charlie Kotula`;
      })
      .catch(() => setNotFound(true));
  }, [pub, slug]);

  return (
    <Box>
      <SiteHeader />
      <Box component="article" sx={{ px: { xs: 3, md: 4 }, py: 6, maxWidth: "720px", mx: "auto" }}>
        <Button component={RouterLink} to={pub ? `/blog/${pub.id}` : "/blog"} sx={{ mb: 3, ml: -1 }}>
          ← {pub ? pub.name : "All posts"}
        </Button>

        {notFound && <Typography>Sorry, that post couldn't be found.</Typography>}
        {!post && !notFound && <CircularProgress />}

        {post && (
          <>
            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
              {post.title}
            </Typography>
            {post.subtitle && (
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 1 }}>
                {post.subtitle}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              {formatDate(post.date)} · {readingTime(post.wordcount)}
            </Typography>

            {/* HTML is sanitized by scripts/fetch-substack.mjs at fetch time. */}
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />

            <Divider sx={{ my: 5 }} />
            <Typography variant="body2" color="text.secondary">
              Originally published in{" "}
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                {pub?.name}
              </Link>{" "}
              on Substack.
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default BlogPostPage;
