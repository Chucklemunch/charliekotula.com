import React from 'react';
import { NavBar } from './stories/Navigation/NavBar';
import './App.css';
import YPGG from './YPGG';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
 * Home page for website
 */
function App() {
  return (
    <div className="App">
        <NavBar 
          pages={["Home", "A Young Person's Guide to the Galaxy", "About"]}
          pagePaths={["./", "./ypgg", "./about"]}
          currentPage={1}
        />
    </div>
  );
}

export default App;
