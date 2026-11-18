import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { publications } from "./blog/publications";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/charlie-kotula-50b5bb229/", icon: "/LI-In-Bug.png" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=K40kNiMAAAAJ&hl=en", icon: "/google_scholar.png" },
  { label: "GitHub", href: "https://github.com/Chucklemunch", icon: "/github-mark.png" },
];

const SiteHeader: React.FC = () => {
  const [openCV, setOpenCV] = useState(false);

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {publications.map((p) => (
              <Tooltip key={p.id} title={p.name}>
                <IconButton
                  aria-label={`${p.name} on Substack`}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box component="img" src={p.icon} alt={p.name} sx={{ width: 36, height: 36, borderRadius: 1 }} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0, sm: 1 } }}>
            {/* Social icons are hidden on phones so the toolbar fits on one line. */}
            {socialLinks.map(({ label, href, icon }) => (
              <Tooltip key={label} title={label}>
                <IconButton
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: { xs: "none", sm: "inline-flex" } }}
                >
                  <Box component="img" src={icon} alt={label} sx={{ width: 24, height: 24 }} />
                </IconButton>
              </Tooltip>
            ))}
            <Button color="inherit" component={RouterLink} to="/">Home</Button>
            <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>
            <Tooltip title="CV">
              <Button color="inherit" onClick={() => setOpenCV(true)}>CV</Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* CV Modal */}
      <Dialog open={openCV} onClose={() => setOpenCV(false)} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          My CV
          <IconButton onClick={() => setOpenCV(false)} aria-label="close">
            <span style={{ fontSize: 20, lineHeight: 1, fontWeight: 600 }}>×</span>
          </IconButton>
        </DialogTitle>
        <Box sx={{ height: "80vh" }}>
          <iframe
            src="/CV_Charles_Kotula.pdf"
            title="CV"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default SiteHeader;
