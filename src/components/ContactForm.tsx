import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import * as React from "react";
import {
  darkThemeStyles,
  themeShadows,
  themeStyles,
  useTheme,
} from "../contexts/ThemeContext";
import { color } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="contact-section">
      <div
        className="contact-info"
        style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
      >
        <h1>
          Reach out to me for{" "}
          <span style={{ color: themeStyles[theme] || undefined }}>
            matches 🎮
          </span>
        </h1>
        <p>
          <br />
          <h3>Over at:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a
                key={index}
                style={{
                  boxShadow:
                    theme === "blue"
                      ? `0 8px 32px 0 rgba(31, 41, 135, 0.37)` // Blue shadow for blue theme
                      : theme === "red"
                      ? `0 8px 32px 0 rgba(135, 41, 31, 0.37)` // Red shadow for red theme
                      : `0 8px 32px 0 rgba(31, 135, 130, 0.37)`, // Aqua shadow for aqua theme
                }}
              >
                <img
                  src={`/socials/${social.icon}`}
                  alt=""
                  onClick={() => {
                    window.open(social.url, "_blank");
                  }}
                  style={{ cursor: "pointer" }}
                />
              </a>
            ))}
          </div>
        </p>

        <div>
          <p className="contact-links">
            <MdEmail />
            washizaki@pro.pro
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            East Coast (USA)
          </p>
        </div>
      </div>
      <div className="contact-form">
        <form
          name="contact"
          data-netlify="true"
          style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
        >
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="text" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="theme-submit"
            style={{
              backgroundColor: isHovered ? themeStyles[theme] : undefined, // Default background color
              boxShadow: `0 8px 32px 0 ${themeShadows[theme]}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
