import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Avatar
} from "@mui/material";

/*
 * YPGG page for website
 */
function About() {
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
    </div>
  );
}

export default About;