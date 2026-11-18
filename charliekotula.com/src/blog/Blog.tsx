import React, { useEffect, useState } from "react";
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import SiteHeader from "../SiteHeader";
import { PostMeta, formatDate, readingTime } from "./types";
import { findPublication, publications } from "./publications";

const Blog: React.FC = () => {
  const { pub: pubId } = useParams();
  const pub = findPublication(pubId);
  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!pub) return;
    document.title = `${pub.name} · Charlie Kotula`;
    setPosts(null);
    setError(false);
    fetch(`/blog/${pub.id}/index.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(setPosts)
      .catch(() => setError(true));
  }, [pub]);

  // /blog and unknown publications land on the first publication.
  if (!pub) return <Navigate to={`/blog/${publications[0].id}`} replace />;

  return (
    <Box>
      <SiteHeader />
      <Box sx={{ px: { xs: 2, md: 8 }, py: 5, maxWidth: "800px", mx: "auto" }}>
        <Tabs
          value={pub.id}
          variant="fullWidth"
          sx={{ mb: 5, borderBottom: 1, borderColor: "divider" }}
        >
          {publications.map((p) => (
            <Tab
              key={p.id}
              value={p.id}
              component={RouterLink}
              to={`/blog/${p.id}`}
              icon={<Avatar src={p.icon} alt="" variant="rounded" sx={{ width: 32, height: 32 }} />}
              iconPosition="start"
              label={p.name}
              sx={{ textTransform: "none", fontSize: "1rem", fontWeight: 600, minHeight: 64 }}
            />
          ))}
        </Tabs>

        <Typography variant="h3" fontWeight={700} gutterBottom>
          {pub.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 1, fontWeight: 400 }}>
          {pub.tagline}
        </Typography>
        <Link
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="body2"
          sx={{ display: "inline-block", mb: 5 }}
        >
          Subscribe on Substack →
        </Link>

        {error && <Typography color="error">Couldn't load posts. Please try again later.</Typography>}
        {!posts && !error && <CircularProgress />}
        {posts?.length === 0 && <Typography color="text.secondary">No posts yet.</Typography>}

        <Stack spacing={3}>
          {posts?.map((p) => (
            <Card key={p.slug} elevation={2}>
              <CardActionArea
                component={RouterLink}
                to={`/blog/${pub.id}/${p.slug}`}
                sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}
              >
                {p.coverImage && (
                  <Box
                    component="img"
                    src={p.coverImage}
                    alt=""
                    loading="lazy"
                    sx={{ width: { xs: 96, sm: 160 }, height: { xs: 96, sm: 120 }, objectFit: "cover", flexShrink: 0 }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>{p.title}</Typography>
                  {p.subtitle && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{p.subtitle}</Typography>
                  )}
                  <Typography variant="caption" color="text.secondary">
                    {formatDate(p.date)} · {readingTime(p.wordcount)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Blog;
