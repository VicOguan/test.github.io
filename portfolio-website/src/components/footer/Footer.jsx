import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
    <div className="footer-footer" >
      <footer className="footer-container1">
        <img alt="image" src="/src/assets/ghost.png" className="footer-image" />
        <div className="footer-container2">
          <span className="footer-text">
            <a href="https://github.com/Vickun-glitch">
              <i class="fa-brands fa-discord"></i>
            </a>
          </span>
          <span className="footer-text1">
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span className="footer-text2">
            <i class="fa-brands fa-square-instagram"></i>
          </span>
          <span className="footer-text3">
            <i class="fa-brands fa-youtube"></i>
          </span>
          <span className="footer-text4">
            <i class="fa-solid fa-envelope"></i>
          </span>
          <span className="footer-text5">
            <i class="fa-brands fa-linkedin"></i>
          </span>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-container3">
          <span className="footer-text6 Body2">© 2023 Ludivico Oguan</span>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Footer;
