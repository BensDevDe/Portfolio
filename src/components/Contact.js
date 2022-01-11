import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import { send } from "emailjs-com";

import AnimatedPage from "./AnimatedPage";

const Contact = () => {
  const [thanksMessage, setThanksMessage] = useState(false);

  const handleThanksBox = () => {
    if (!thanksMessage) {
      document.querySelector(".confirm-bg-thanks").style.display = "flex";
      document.querySelector(".container-thanks").style.display = "flex";

      setThanksMessage(true);
    } else {
      document.querySelector(".confirm-bg-thanks").style.display = "none";
      document.querySelector(".container-thanks").style.display = "none";

      setThanksMessage(false);
    }
  };

  const [sendConfirmMessage, setSendConfirmMessage] = useState(false);

  const handleConfirmationBox = () => {
    if (!sendConfirmMessage) {
      document.querySelector(".confirm-bg").style.display = "flex";
      document.querySelector(".container").style.display = "flex";
      setSendConfirmMessage(true);
    } else {
      document.querySelector(".confirm-bg").style.display = "none";
      document.querySelector(".container").style.display = "none";
      setSendConfirmMessage(false);
    }
  };

  const [toSend, setToSend] = useState({
    from_name: "",
    subject: "",
    message: "",
    reply_to: "",
  });

  const onConfirm = () => {
    send(
      "service_ggrmtqn",
      "template_30uietm",
      toSend,
      "user_f10RlSTnBDVKFHRKVzel4"
    )
      .then((response) => {
        console.log("Success", response.status, response.text);
        handleThanksBox();
      })
      .catch((err) => {
        alert("FAILED...", err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleConfirmationBox();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <AnimatedPage>
      <div className="move-to">
        <div className="move-to-box">
          <div>
            <NavLink to="/projects">
              <FaArrowLeft role="button" />
            </NavLink>
          </div>

          <div className="move-to-text">
            {" "}
            <p>PROJECTS</p>
          </div>
        </div>

        <div className="move-to-box">
          <div>
            <NavLink to="/">
              <FaArrowRight role="button" />
            </NavLink>
          </div>

          <div className="move-to-text">
            {" "}
            <p>HOME</p>
          </div>
        </div>
      </div>
      <section className="contact-container">
        <div className="form-container">
          <h2>Get In Touch!</h2>
          <form onSubmit={onSubmit}>
            <div className="contact-element">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                autoComplete="off"
                value={toSend.from_name}
                onChange={handleChange}
              />
            </div>
            <div className="contact-element">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="reply_to"
                required
                autoComplete="off"
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </div>
            <div className="contact-element">
              <label htmlFor="subject">Subject</label>
              <select
                type="text"
                name="subject"
                required
                value={toSend.subject}
                onChange={handleChange}
              >
                <option value="">--Please choose one--</option>
                <option value="Web-Development">Web-Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="general">general</option>
              </select>
            </div>
            <div className="textbox-container">
              <label htmlFor="message">Your Message</label>
              <textarea
                type="text"
                className="contact-textbox"
                name="message"
                autoComplete="off"
                placeholder="..."
                value={toSend.message}
                onChange={handleChange}
              />
            </div>
            <div className="container">
              <div className="confirmation-text">
                <h2>Please check your entries</h2>
                <div className="confirmation-text-flex">
                  <p>
                    {" "}
                    <span>Name: </span> {toSend.from_name}
                  </p>
                  <p>
                    {" "}
                    <span>Email:</span> {toSend.reply_to}
                  </p>
                  <p>
                    {" "}
                    <span>Subject:</span> {toSend.subject}
                  </p>
                </div>

                <p>
                  {" "}
                  <span>Your Message:</span>{" "}
                </p>
                <p>{toSend.message}</p>
              </div>
              <div className="button-container">
                <button className="cancel-button" onClick={() => onSubmit()}>
                  GO BACK
                </button>
                <button
                  className="confirmation-button"
                  onClick={() => onConfirm()}
                >
                  CONFIRM
                </button>
              </div>
            </div>

            <div className="confirm-bg"></div>

            <button className="send-button" type="submit">
              SEND
            </button>
          </form>

          <div className="container-thanks">
            <div className="confirmation-text-thanks">
              <p>Thank you for your message, {toSend.from_name}!</p>
              <p>Best Regards,</p>
              <p>Ben</p>
              <p>webogies.com</p>
            </div>
            <div className="button-container-thanks">
              <button
                className="cancel-button-thanks"
                onClick={() => handleThanksBox()}
              >
                CONTINUE
              </button>
            </div>
          </div>

          <div className="confirm-bg-thanks"></div>
        </div>
        <div className="contact-or"></div>

        <div className="contact-link-container">
          <a
            className="contact-link-element"
            target="_blank"
            href="https://github.com/BensDevDe"
            rel="noreferrer"
          >
            <FaGithub />
            <p>Github</p>
          </a>

          <a
            className="contact-link-element"
            target="_blank"
            href="https://linkedin.com/in/ben-stautner-17a721226"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            <p>Linkedin</p>
          </a>

          <a
            className="contact-link-element"
            target="_blank"
            href="mailto:info@webogies.com"
            rel="noreferrer"
          >
            <MdAlternateEmail />
            <p>Mail</p>
          </a>

          <a
            className="contact-link-element"
            target="_blank"
            href="https://instagram.com/webogies"
            rel="noreferrer"
          >
            <FaInstagram />
            <p>Instagram</p>
          </a>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
