import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="copyright">
          <p>
            {" "}
            <AiOutlineCopyrightCircle />{" "}
          </p>{" "}
          <p>2021, webogies.com</p>
        </div>

        <div className="footer-links">
          <a target="_blank" href="https://github.com/BensDevDe" rel="noreferrer">
            <FaGithub />
          </a>
          <a target="_blank" href="https://linkedin.com/in/ben-stautner-17a721226" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a target="_blank" href="mailto:info@webogies.com" rel="noreferrer">
            <MdAlternateEmail />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/webogies"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <div>
          <button>DE</button>
          <button>EN</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
