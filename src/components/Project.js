import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Project = ({ selectedProject }) => {
  const fadeProperties = {
    duration: 1000000000,
    pauseOnHover: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px" }}>
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
      <div style={{ width: "30px", marginLeft: "-30px" }}>
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
  return (
    <div className="project-view">
      {selectedProject && (
        <>
          <div className="project-view-headline">
            <div>
              <h1>{selectedProject.name}</h1>
            </div>
          </div>
          <Fade
            {...fadeProperties}
            autoplay="false"
            easing="cubic"
            className="slide-box"
          >
            <div className="each-slide">
              <div className="project-view-image">
                <img src={`${selectedProject.detailImage1}`} alt="" />
              </div>
            </div>
            <div className="each-slide">
              <div className="project-view-image">
                <img
                  src={`${selectedProject.detailImage2}`}
                  alt={selectedProject.image}
                />
              </div>
            </div>
            <div className="each-slide">
              <div className="project-view-image">
                <img
                  src={`${selectedProject.detailImage3}`}
                  alt={selectedProject.image}
                />
              </div>
            </div>
            <div className="each-slide">
              <div className="project-view-image">
                <img
                  src={`${selectedProject.detailImage4}`}
                  alt={selectedProject.image}
                />
              </div>
            </div>
          </Fade>

          <div className="detail-container">
            <div>
              {" "}
              <p>Name: {selectedProject.name} </p>
            </div>
            <div>
              <p>Website: {selectedProject.webpage} </p>
            </div>

            <div>
              {" "}
              <p>Technologies: {selectedProject.technologies} </p>
            </div>
            <div>
              {" "}
              <p>Launch: {selectedProject.launch} </p>
            </div>
            <div>
              <p>Description: {selectedProject.description} </p>
            </div>
          </div>

          <div className="link-box project-view-link-box">
            <div>
              <button>
                <a
                  target="_blank"
                  href={selectedProject.webpage}
                  rel="noreferrer"
                >
                  <MdComputer /> <span> Visit</span>
                </a>
              </button>
            </div>

            <div>
              <button>
                <a
                  target="_blank"
                  href={selectedProject.github}
                  rel="noreferrer"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
