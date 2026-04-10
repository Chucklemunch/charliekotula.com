import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Divider,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";

const highlights = [
  {
    title: "Multimodal Clinical Deterioration Modeling",
    description:
      "Developed and compared methods of parameterizing Concept Unique Identifiers (CUIs) to build deep learning models predicting clinical deterioration.",
    url: "https://www.jmir.org/2025/1/e75340"
  },
  {
    title: "AgentP",
    description:
      "A RAG-based physical medicine and rehabilitation coach.",
    url: "https://agentp.charliekotula.com"
  },
  {
    title: "Muse",
    description:
      "An AI music jamming app that allows you to trade bars with a music model!",
    url: "https://muse.charliekotula.com/"
  },
];

const About: React.FC = () => {
  const [openCV, setOpenCV] = useState(false);
  const handleOpen = () => setOpenCV(true);
  const handleClose = () => setOpenCV(false);

  return (
    <Box>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Charlie Kotula
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Tooltip title="LinkedIn">
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/charlie-kotula-50b5bb229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box component="img" src="/LI-In-Bug.png" alt="LinkedIn" sx={{ width: 24, height: 24 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Google Scholar">
              <IconButton
                aria-label="Google Scholar"
                href="https://scholar.google.com/citations?user=K40kNiMAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box component="img" src="/google_scholar.png" alt="Google Scholar" sx={{ width: 24, height: 24 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                aria-label="GitHub"
                href="https://github.com/Chucklemunch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box component="img" src="/github-mark.png" alt="GitHub" sx={{ width: 24, height: 24 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Substack">
              <IconButton
                aria-label="Substack"
                href="https://substack.com/@charliekotula?utm_source=user-menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box component="img" src="/substack.png" alt="Substack" sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="CV">
              <Button color="inherit" onClick={handleOpen}>CV</Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* CV Modal */}
      <Dialog open={openCV} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          My CV
          <IconButton onClick={handleClose} aria-label="close">
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

      {/* All the other important stuff */}
      <Box sx={{ px: { xs: 3, md: 8 }, py: 6, maxWidth: "1000px", mx: "auto" }}>

        {/* HERO SECTION */}
        <Stack spacing={2} sx={{ mb: 6, textAlign: "left" }}>
          <Typography variant="h3" fontWeight={700}>
            Hi! I'm Charlie Kotula :)
          </Typography>
          <Typography variant="h5" color="text.secondary">
            I'm a machine learning engineer exploring how to build ethical, intelligent
            systems in biotech and medicine.
          </Typography>
        </Stack>

        {/* STORY SECTION */}
        <Grid container spacing={6}>

          {/* LEFT: Story */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
              What I Do
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I work at the intersection of machine learning and medicine. My projects have explored multimodal modeling for clinical deterioration,
              explainability (XAI), time-series modeling, transformers, and foundation models.
            </Typography>

            <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mr: 5 }}>
              Why I Do It
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, mr: 5 }}>
              I'm motivated by truth, benevolence, and discovery. I'm inspired
              by the potential of computational tools to improve human flourishing,
              and my goal is to actualize it.
            </Typography>

            <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mr: 5 }}>
              How I Got Here
            </Typography>
            <Typography variant="body1">
              I studied Neurobiology and Computer Science before completing my MS in
              Biomedical Data Science. During my studies, I worked extensively with
              electronic health record (EHR) data to develop multimodal ML models
              for predicting clinical deterioration. My personal projects have explored
              Retrieval-Augmented Generation (RAG) for health coaching, foundation models for pathology, language models for music, and a sprinkle
              of web development.
            </Typography>
          </Grid>

          {/* RIGHT: Profile */}
          <Grid item xs={12} md={5}>
            <Stack alignItems="center" spacing={3}>
              <Avatar
                src='char_on_rocks_dk.png'
                sx={{ width: 500, height: 500 }}
              />
              <Typography variant="body1" textAlign="center">
                Outside of work, I train Brazilian jiu-jitsu, play guitar and piano, and
                write. I'm quite introverted, yet I'm often described as a Golden Retriever.
                I love meeting new people, am very playful, and always love a good opportunity to
                roll around in the grass.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* HIGHLIGHTS */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            Selected Work
          </Typography>

          <Stack spacing={3}>
            {highlights.map((h, idx) => (
              <Card key={idx} elevation={2}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="a"
                    href={h.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    sx={{ textDecoration: "none", fontWeight: 600,
                          "&:hover": { textDecoration: "underline" } }}
                  >
                    {h.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {h.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* CALL TO ACTION */}
        <Divider sx={{ my: 6 }} />

        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h5" fontWeight={600}>
            Let's Connect!
          </Typography>
          <Typography variant="body1">
            I'm actively searching for employment as an ML developer/researcher in medicine and biotech!
            Please feel to reach out via email or LinkedIn with regards to any employment opportunities,
            or if you just want to chat! I'm highly responsive on both platforms.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" href="mailto:charlie.kotula@gmail.com">
              Email Me
            </Button>
            <Button variant="outlined" href="https://www.linkedin.com/in/charliekotula/">LinkedIn</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
