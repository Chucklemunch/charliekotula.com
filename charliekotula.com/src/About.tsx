import React from "react";
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
} from "@mui/material";

const highlights = [
  {
    title: "Multimodal Clinical Deterioration Modeling",
    description:
      "Developed and compared methods of parameterizing Concept Unique Identifiers (CUIs) to build deep learning models predicting clinical deterioration.",
    url: "https://www.jmir.org/2025/1/e75340"
  },
  {
    title: "Muse",
    description:
      "An AI music jamming app that allows you to trade bars with a music model!",
    url: "https://muse.charliekotula.com/"
  },
];

const About: React.FC = () => {
  return (

    <Box>
      <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Charlie Kotula
        </Typography>
        <Box>
        <Button href="./" color="inherit">Home</Button>
        {/* <Button href="./ypgg" color="inherit">A Young Person's Guide to the Galaxy</Button> */}
        <Button href="./about" color="inherit">About</Button>
        </Box>
      </Toolbar>
      </AppBar>

      {/*All the other important stuff*/}
      <Box sx={{ px: { xs: 3, md: 8 }, py: 6, maxWidth: "1000px", mx: "auto" }}>
        
        {/* HERO SECTION */}
        <Stack spacing={2} sx={{ mb: 6, textAlign: "left" }}>
          <Typography variant="h3" fontWeight={700}>
            Hi! I’m Charlie Kotula :)
          </Typography>
          <Typography variant="h5" color="text.secondary">
            I’m a biomedical data scientist exploring how to build ethical, intelligent
            systems in biotech and medicine.
          </Typography>
        </Stack>

        {/* STORY SECTION */}
        <Grid container spacing={6}>

          {/* LEFT: Story */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
              My Work
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I work at the intersection of machine learning and medicine. My projects have explored multimodal modeling for clinical deterioration, 
              explainability (XAI), time-series modeling, transformers, and foundation models.
            </Typography>

            <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
              Why I Do It
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I'm motivated by truth, benevolence, and discovery. I'm inspired
              by the potential of computational tools to improve human flourishing, 
              and my goal is to contribute to systems do just that.
            </Typography>

            <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
              Background
            </Typography>
            <Typography variant="body1">
              I studied Neurobiology and Computer Science before completing my MS in
              Biomedical Data Science. During my studies, I worked extensively with 
              electronic health record (EHR) data to develop multimodal ML models
              for predicting clinical deterioration. My personal projects have explored
              foundation models for pathology, language models for music, and a little bit
              of web development.
            </Typography>
          </Grid>

          {/* RIGHT: Profile */}
          <Grid item xs={12} md={5}>
            <Stack alignItems="center" spacing={3}>
              <Avatar
                src='char_alex_wed.png'
                sx={{ width: 160, height: 160 }}
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
