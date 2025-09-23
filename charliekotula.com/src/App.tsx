import React from 'react';
import { NavBar } from './stories/Navigation/NavBar';
import YinYang from "./images/YinYang.jpg";
import './App.css';

/*
 * Home page for website
 */
function App() {
  return (
 
	<div
      className="home"
      style={{
        display: "grid",
        gridTemplateRows: "50px 500px auto",
        justifyContent: "center",
        overflowX: "hidden", // Prevents horizontal scroll caused by animation
      }}
    >
      <title>Charlie Kotula</title>

      <NavBar
        pages={["Home", "A Young Person's Guide to the Galaxy", "About"]}
        pagePaths={["./", "./ypgg", "./about"]}
        currentPage={0}
      />
			<img
				src={YinYang}
				alt="YinYang"
				style={{
					transform: "translateY(50%)",
					margin: "0 auto", // Centers it
					display: "block", // Required for margin:auto to work
				}}
			/>

      <div
        style={{
          width: "100vw",
          overflow: "hidden",
          whiteSpace: "nowrap",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p className="animate-scroll text-2xl font-medium">
          Welcome to my website • Check out my projects • Learn about my skills • Cool features coming soon •
        </p>
      </div>

      {/* Embedded style (or move this to App.css for clarity) */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 15s linear infinite;
          white-space: nowrap;
        }
      `}</style>

    </div>
  );
}

export default App;
