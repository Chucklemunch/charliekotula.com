import React from 'react';
import Button from "@mui/material/Button";
import App from './App';
import YPGG from './YPGG';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './stories/Navigation/NavBar';

/*
 * YPGG page for website
 */
function About() {
  return (
    <div className="About">
      <title>About</title>
      <NavBar 
        pages={["Home", "A Young Person's Guide to the Galaxy", "About"]}
        pagePaths={["./", "./ypgg", "./about"]}
        currentPage={2}
      />
    </div>
  );
}

export default About;