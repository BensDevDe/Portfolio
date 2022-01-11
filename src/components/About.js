import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { FaArrowRight, FaArrowLeft, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobexd,
  SiFigma,
} from "react-icons/si";

import aboutImg1 from "../bgimg/ben3-color.jpg";
import aboutImg2 from "../bgimg/bfinal.jpg";

import { DiScrum } from "react-icons/di";

import { NavLink } from "react-router-dom";

const About = () => {
  const [imageChange, setImageChange] = useState(false);

  const changeImage = () => {
    
    if (!imageChange) {
      document.querySelector(
        ".about-image"
      ).innerHTML = `<img src="${aboutImg1}">`;
      setImageChange(true);
    } else {
      document.querySelector(
        ".about-image"
      ).innerHTML = `<img src="${aboutImg2}">`;

      setImageChange(false);
    }
  };
  return (
    <AnimatedPage>
      <div className="move-to">
        <div className="move-to-box">
          <div>
            <NavLink to="/">
              <FaArrowLeft role="button" />
            </NavLink>
          </div>

          <div className="move-to-text">
            {" "}
            <p>HOME</p>
          </div>
        </div>

        <div className="move-to-box">
          <div>
            <NavLink to="/projects">
              <FaArrowRight role="button" />
            </NavLink>
          </div>

          <div className="move-to-text">
            {" "}
            <p>PROJECTS</p>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="about-description">
          <div
            className="about-image"
            onMouseEnter={changeImage}
            onMouseLeave={changeImage}
          >
            <img src={aboutImg2} alt="" />
          </div>
          <div className="about-text">
            <p>
              Hi, my name is Ben. I am a <span>Full Stack Developer</span>{" "}
            </p>
          </div>
          <div>
            <p>...based in Munich, Germany.</p>
          </div>
        </div>

        <div className="skills">
          <h2>SKILLS</h2>
          <div className="skills-icons">
            <p>
              <SiJavascript />
              <span>Javascript</span>
            </p>

            <p>
              <SiReact />
              <span>React</span>
            </p>

            <p>
              <SiHtml5 />
              <span>HTML</span>
            </p>

            <p>
              <SiCss3 />
              <span>CSS</span>
            </p>

            <p>
              <FaSass />
              <span>Sass</span>
            </p>

            <p>
              <SiBootstrap />
              <span>Bootstrap</span>
            </p>

            <p>
              <DiScrum />
              <span>PROFESSIONAL SCRUM MASTER™</span>
            </p>

            <p>
              <SiAdobexd />
              <span>Adobe XD</span>
            </p>

            <p>
              <SiAdobephotoshop />
              <span>Adobe PS</span>
            </p>

            <p>
              <SiAdobelightroom />
              <span>ADOBE LR</span>
            </p>

            <p>
              <SiFigma />
              <span>FIGMA</span>
            </p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
