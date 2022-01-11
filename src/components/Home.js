import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import { FaArrowRight } from "react-icons/fa";

import AnimatedPage from "./AnimatedPage";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="move-to">
        <div>
          <div>
            <NavLink to="/about"></NavLink>
          </div>
        </div>

        <div className="move-to-box">
          <div>
            <NavLink to="/about">
              <FaArrowRight role="button" />
            </NavLink>
          </div>

          <div className="move-to-text">
            {" "}
            <p>ABOUT</p>
          </div>
        </div>
      </div>
      <section className="home">
        <div className="home-text">
          <p>Ben Stautner</p>
          <h2>
            Web Development<span>|</span>
          </h2>
        </div>
       
      </section>
    </AnimatedPage>
  );
};

export default Home;
