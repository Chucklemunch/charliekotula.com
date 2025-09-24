import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

interface ImageData{
    src: string;
    description: string
}
interface CircularImageProps {
    img: ImageData;
    x: number;
    y: number;
    imgSize: number
}

function CircularImage({ img, x, y, imgSize }: CircularImageProps) {
  const [hoveredText, setHoveredText] = useState(false);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 500,
        height: 500,
        mt: 7,
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: 3,
        zIndex: 1,
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform 0.3s, z-index 0.3s",
        "&:hover": {
          transform: `translate(${x}px, ${y}px) scale(1.2)`, // scale image
          zIndex: 10,
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={img.src}
        alt={img.description}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hoveredText ? 1 : 0,
          transition: "opacity 0.3s",
          textAlign: "center",
          p: 1,
        }}
      >
        <Typography
          variant="body2"
          onMouseEnter={() => setHoveredText(true)}
          onMouseLeave={() => setHoveredText(false)}
          sx={{
            pointerEvents: "auto",
            cursor: "pointer",
            width: "75%",
            zIndex: 20,
          }}
        >
          {img.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularImage;
