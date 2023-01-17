import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about-container" id="about">
         <div className="section-container">
        <div className="about-max-width2 max-width">
          <img
            alt="image"
            src="/src/assets/avatar3.jpeg"
            className="about-hero-image1"
          />
          <div className="about-content1">
            <span className="about-text6 beforeHeading">Educational background</span>
            <h1 className="about-text7">BS Computer Science</h1>
            <span className="about-text8">
            I received a bachelor's degree in computer science from Bicol University in July 2022.
            </span>
            <div className="about-container2">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About