import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import CircularImage from "./CircularImg";



/*
 * YPGG page for website
 */
function About() {
  const images = [
  { src: "/char_golf.jpg", description: "Fun" },
  { src: "/char_jonathan_bjj.jpg", description: "Community" },
  { src: "/char_river.jpg", description: "Silliness" },
  { src: "/char_stringray.jpg", description: "Adventure" },
  { src: "/contemplating_life.jpg", description: "Peace" },
]

  const radius = 300;
  const imgSize = 500;
  // const [hoveredText, setHoveredText]


  return (
    <div className="About">
      <title>About</title>
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
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#fafafa",
      }}
    >
      {/* Central About Me Card */}
      <Card
        sx={{
          position: "relative",
          zIndex: 2,
          p: 4,
          maxWidth: 600,
          textAlign: "center",
          boxShadow: 6,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            I am a biomedical data scientist with a passion for computational biology and ethical applications of machine learning. 
            In my free time, I enjoy adventuring, playing guitar and piano, training jiu-jitsu, writing, coding, and spending time with wonderful people.
          </Typography>
        </CardContent>
      </Card>

      {/* Surrounding Images */}
      {images.map((img, idx) => {
        const angle = (idx / images.length) * 2 * Math.PI; // distribute around circle
        const x = 2 * radius * Math.cos(angle) - (imgSize / 2);
        const y = radius * Math.sin(angle)  - (imgSize / 2);
        return (
            <CircularImage key={idx} img={img} x={x} y={y} imgSize={imgSize} />
        );
      })}
    </Box>

    </div>
  );
}

export default About;