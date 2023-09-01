import React from 'react';
import { NavBar } from './stories/Navigation/NavBar';
import YinYang from "./images/YinYang.jpg";
import './App.css';

/*
 * Home page for website
 */
function App() {
  return (
    <div className="home" style={{display: "grid", gridTemplateRows: "50px 500px 50px", justifyContent: "center"}}>
      <title>Charlie Kotula</title>
      <NavBar 
        pages={["Home", "A Young Person's Guide to the Galaxy", "About"]}
        pagePaths={["./", "./ypgg", "./about"]}
        currentPage={0}
      />
      <img src={YinYang} style={{transform: "translateY(50%)"}}/>
    </div>
  );
}

export default App;
