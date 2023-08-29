import React from 'react';
import Button from "@mui/material/Button";
import About from './About';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './stories/Navigation/NavBar';

/*
 * YPGG page for website
 */
function YPGG() {
  return (
    <div className="YPGG">
      <NavBar 
        pages={["Home", "A Young Person's Guide to the Galaxy", "About"]}
        pagePaths={["./", "./ypgg", "./about"]}
        currentPage={1}
      />
    </div>
  );
}

export default YPGG;
