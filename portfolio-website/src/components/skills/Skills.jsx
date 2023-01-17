import React from "react";
import "./skills.css";
import "./skills.scss";
import "./progress.css"

const Skills = () => {
  return (
    <section className="skills-testimonials" id="skills">
      <div className="skills-container12">
        <div className="skills-container13"></div>
        <div className="skills-logos">
          <div className="skills-container18">
            <ul class="orbit-wrap">
              <li class="orbit-center">
                <i class="orbit-center__icon fa fa-code"></i>
              </li>

              <li>
                <ul class="ring-0">
                  <li>
                    <i class="orbit-icon fa-brands fa-java"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-brands fa-html5"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-brands fa-css3-alt"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-brands fa-sass"></i>
                  </li>
                </ul>
              </li>

              <li>
                <ul class="ring-1">
                  <li>
                    <i class="orbit-icon fa-solid fa-database"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-brands fa-css3"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-solid fa-globe"></i>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="ring-2">
                  <li>
                    <i class="orbit-icon fa-brands fa-connectdevelop"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-solid fa-book"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-solid fa-brain"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-brands fa-discord"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-solid fa-music"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-solid fa-film"></i>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="ring-3">
                  <li>
                    <i class="orbit-icon fa fa-coffee"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-solid fa-cat"></i>
                  </li>
                  <li>
                    <i class="orbit-icon fa-solid fa-gamepad"></i>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/src/assets/bottom.svg"
        className="skills-bottom-wave-image"
      />
      <img
        alt="image"
        src="/src/assets/waves-white.svg"
        className="skills-image19"
      />
      <img
        alt="image"
        src="/src/assets/top.svg"
        className="skills-top-wave-image"
      />
    </section>
  );
};

export default Skills;
