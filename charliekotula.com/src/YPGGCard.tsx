import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
// Replace with your actual Substack profile image
import SubstackProfile from "./images/BabyYoda.jpg"; 

function YPGGCard() {
  return (
    <Card 
      sx={{ 
        maxWidth: 800, 
        mx: "auto", 
        mt: 6, 
        borderRadius: 4, 
        boxShadow: 6, 
        textAlign: "center" 
      }}
    >
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{mt: 3}}>
            Checkout my Substack!
        </Typography>

      {/* Profile Image */}
      <CardMedia
        component="img"
        image={SubstackProfile}
        alt="Substack profile"
        sx={{ 
            maxWidth: 600,
            maxHeight: 300, 
            mx: "auto", 
            mt: "3", 
            borderRadius: "50%", 
            objectobjectFit: "cover",
            objectPosition: "center %40",
            transform: "scale(0.9)"
        }}
      />

      {/* Content */}
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          A Young Person&apos;s Guide to the Galaxy
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{mb: 2 }}>
            <br/>
            We are reborn in each moment. <br /><br />

            Cell turnover, synaptogenesis, and perpetual interaction with the world beyond the boundary of our skin ensure that we’re never the same person twice. 
            Everchanging, we are all, in a sense, forever young.<br /><br />

            It’s the job of a young person to grapple with interesting ideas, develop valuable skills, and make themselves useful. 
            A Young Person’s Guide to the Galaxy is my effort to chronicle my journey of doing just that.

            What am I grappling with? What am I learning? How do I (or how do I hope to) make myself useful?<br /><br />

            This blog will answer those questions and many more.<br /><br />

            Welcome to A Young Person’s Guide to the Galaxy…
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            href="https://substack.com/@charliekotula?utm_source=user-menu"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderRadius: 2 }}
          >
            Visit Substack
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default YPGGCard;
