import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";

import { useParams, NavLink } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  FaGithub,
  FaReact,
  FaPlay,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdReadMore, MdComputer } from "react-icons/md";

import Project from "./Project";

const Projects = ({ projects }) => {
  const styleJS = {
    color: "#efd737",
  };

  const [autoplay, setAutoplay] = useState(true);
  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", opacity: "0.9" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", opacity: "0.9" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  const params = useParams();
  console.log(params.name);
  const selectedProject = projects.find((item) => item.name === params.name);
  console.log(selectedProject);
  return (
    <AnimatedPage>
      <div className="move-to">
        <div className="move-to-box">
          <div>
            <NavLink to="/about">
              <FaArrowLeft role="button" />
            </NavLink>
          </div>

          <div className="move-to-text">
            {" "}
            <p>ABOUT</p>
          </div>
        </div>

        <div className="move-to-box">
          <div>
            <NavLink to="/contact">
              <FaArrowRight role="button" />
            </NavLink>
          </div>

          <div className="move-to-text">
            {" "}
            <p>CONTACT</p>
          </div>
        </div>
      </div>
      <div>
        <div className="projects">
          <div className="projects-container">
            <div className="projects-container-head">
              {" "}
              <div>
                <h2>PROJECTS </h2>
              </div>
              <div>
                {" "}
                <button type="button" onClick={() => setAutoplay(true)}>
                  <FaPlay />
                </button>
              </div>
            </div>

            <Slide
              easing="ease"
              autoplay={autoplay}
              className="slide-box"
              {...fadeProperties}
            >
              {projects.map((item) => {
                return (
                  <div className="projects-box each-slide" key={item.id}>
                    <div className="project-headline">
                      <h4>{item.name}</h4>
                      <div className="made-by">
                        {" "}
                        <p>
                          {item.language === "ReactJS" ? (
                            <FaReact />
                          ) : (
                            <SiJavascript style={styleJS} />
                          )}
                        </p>{" "}
                        <p className="made-by-text">{item.language}</p>
                      </div>
                    </div>

                    <div>
                      <img src={`${item.image}`} alt="Portfolio-Page" />
                    </div>

                    <div className="link-box">
                      <div>
                        <button
                          type="button"
                          onClick={() => setAutoplay(false)}
                        >
                          <NavLink key={item.id} to={`/projects/${item.name}`}>
                            <MdReadMore /> <span> More Info</span>
                          </NavLink>
                        </button>
                      </div>

                      <div>
                        <button>
                          <a target="_blank" href={item.webpage} rel="noreferrer">
                            <MdComputer /> <span> Visit</span>
                          </a>
                        </button>
                      </div>

                      <div>
                        <button>
                          <a
                            target="_blank"
                            href="https://github.com/"
                            rel="noreferrer"
                          >
                            <FaGithub />
                            <span>GitHub</span>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          </div>
          <div>
            {<Project selectedProject={selectedProject || projects[0]} />}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
