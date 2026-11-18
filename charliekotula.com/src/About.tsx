import React from "react";
import SiteHeader from "./SiteHeader";
import {
  Box,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Divider,
  Avatar,
  Button,
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
];

const About: React.FC = () => {
  return (
    <Box>
      <SiteHeader />

      {/* All the other important stuff */}
      <Box sx={{ px: { xs: 3, md: 8 }, py: 6, maxWidth: "1000px", mx: "auto" }}>

        {/* HERO SECTION */}
        <Stack spacing={2} sx={{ mb: 6, textAlign: "left" }}>
          <Typography variant="h3" fontWeight={700}>
            Hi! I'm Charlie :)
          </Typography>
          <Typography variant="h5" color="text.secondary">
            I'm a biosecurity researcher working to reduce catastrophic
            biological risk.
          </Typography>
        </Stack>

        {/* STORY SECTION */}
        <Grid container spacing={6}>

          {/* LEFT: Story */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
              What
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I work on biosecurity: reducing the risk of catastrophic biological
              events, whether natural, accidental, or deliberate.
            </Typography>

            <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mr: 5 }}>
              Why
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, mr: 5 }}>
              I'm motivated by truth and discovery, and by how we can wield technology
              responsibly to build a better future.
            </Typography>

            <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mr: 5 }}>
              How
            </Typography>
            <Typography variant="body1">
              Playfully.
            </Typography>
          </Grid>

          {/* RIGHT: Profile */}
          <Grid item xs={12} md={5}>
            <Stack alignItems="center" spacing={3}>
              <Avatar
                src='char_on_rocks_dk.png'
                sx={{ width: 500, height: 500 }}
              />
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
            I'm always happy to talk biosecurity, machine learning, or anything at the
            intersection of biology and computation. Please feel free to reach out via
            email or LinkedIn, whether to collaborate or just to chat! I'm highly
            responsive on both platforms.
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
