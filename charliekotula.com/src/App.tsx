import React, { useState } from 'react';
import YinYang from "./images/YinYang.jpg";
import Profile from "./images/char_in_suit.jpg"; // your photo
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  IconButton,
} from "@mui/material";


function App() {
  const [openCV, setOpenCV] = useState(false);
  const handleOpen = () => setOpenCV(true);
  const handleClose = () => setOpenCV(false);

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        bgcolor: "#fafafa", 
        position: "relative", 
        overflow: "hidden"
      }}
    >
      <title>Charlie Kotula</title>

      {/* Material UI AppBar */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Charlie Kotula
          </Typography>
          <Box>
            <Button href="./" color="inherit">Home</Button>
            <Button href="./ypgg" color="inherit">A Young Person's Guide to the Galaxy</Button>
            <Button href="./about" color="inherit">About</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Background Yin-Yang */}
      <Box
        component="img"
        src={YinYang}
        alt="yin yang background"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: 300, md: 800 },
          opacity: 0.7,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      {/* Center Card */}
      <Card 
        sx={{ 
          mt: 8,
          p: 4, 
          position: "sticky",
          top: "22%",
          borderRadius: 4, 
          boxShadow: 6, 
          textAlign: "center", 
          zIndex: 1, 
          maxHeight: 500,
          maxWidth: 800 
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 250,
            borderRadius: "50%",
            overflow: "hidden",
            mx: "auto",
            mb: 2,
            boxShadow: 3,
          }}
        >
          <Box
            component="img"
            src={Profile}
            alt="Charlie Kotula"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 5%",
              transform: "scale(1.2)"
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Charlie Kotula
          </Typography>
          <Typography variant="body1" color="text.secondary">
            M.S. Biomedical Data Science
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            B.S. Neurobiology & Computer Science
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
            <Button 
              variant="contained" 
              onClick={handleOpen}
              sx={{ mt: 2, borderRadius: 2 }}
            >
              View CV
            </Button>
            <Button 
              variant="contained"
              href="./about"
              sx={{ mt: 2, borderRadius: 2}}
            >
              About Me
            </Button>
          </Box>

          {/* PDF Popup */}
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

          {/* Social icons at the bottom */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
            {/* GitHub */}
            <IconButton 
              aria-label="GitHub" 
              href="https://github.com/Chucklemunch" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src='/github-mark.png'
                alt="GitHub"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            {/* Substack */}
            <IconButton 
              aria-label="Substack" 
              href="https://substack.com/@charliekotula?utm_source=user-menu" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src='/substack.png'
                alt="Substack"
                sx={{ width: 45, height: 45 }}
              />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              href="https://www.linkedin.com/in/charlie-kotula-50b5bb229/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src='/LI-In-Bug.png'
                alt="LinkedIn"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            <IconButton 
              aria-label="GoogleScholar" 
              href="https://scholar.google.com/citations?user=K40kNiMAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src='/google_scholar.png'
                alt="GoogleScholar"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      
    </Box>
  );
}

export default App;
