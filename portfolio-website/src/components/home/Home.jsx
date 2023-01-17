import React from "react";
import "./home.css";
import Image from "../../assets/avatar2.jpeg";
import Typewriter from "typewriter-effect";

import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero hero-container section-container">
        <div className="home-max-width max-width">
          <div className="home-content">
            <span className="home-subtitle">Simple Portfolio Using react</span>
            <h1 className="home-title">
              <span>Hi, I am</span>
              <br></br>
              <span>
                <Typewriter
                  options={{
                    strings: ["Ludivico Oguan"],
                    autoStart: true,
                    loop: true,
                    pause: 1000,
                    deleteSpeed: 250,
                    cursor: "<img class='pacmanimg' src=\"\http://localhost:5173/src/assets/pacman.gif\"></img>",
                  }} 
                />
              </span>
              
              <br></br>
            </h1>
            <h2 className="home-subtitle">
            Jr. Software Engineer</h2>
                            
            <span className="home-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container1">
              <a href="#about">
                <button className="button button-gradient">About me</button>
              </a>
              <button className="button button-transparent">Email</button>
            </div>
          </div>
          <img alt="image" src={Image} className="home-hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
