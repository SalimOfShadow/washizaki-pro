import * as React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { themeShadows, useTheme } from "../contexts/ThemeContext";
// import { motion } from "framer-motion";
const ProjectCard = (props) => {
  const { theme, setTheme } = useTheme();
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  return (
    <div
      className="project-card"
      style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tqIwhdqOs38?si=LecGlYp0en8_2vz1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      {/* <div className="project-tags">
        <div className="project-tag">
          {projects.stack.map((project, index) => (
            <p key={index}>hello</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default ProjectCard;
