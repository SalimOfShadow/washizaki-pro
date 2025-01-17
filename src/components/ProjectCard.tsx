import * as React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { themeShadows, useTheme } from "../contexts/ThemeContext";
import ScoreResult from "./score-result/ScoreResult";
import useWindowDimensions from "../utils/useWindowDimensions";
import { YoutubePlayer } from "./YoutubePlayer";
// import { motion } from "framer-motion";

const ProjectCard = (props) => {
  const { theme, setTheme } = useTheme();
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = React.useState<boolean>(width < 847.778);

  React.useEffect(() => {
    // Update isMobile whenever the window width changes
    if (width < 1242) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]); // Depend on width to rerun effect when the window size changes

  return (
    <div
      className="project-card"
      style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
    >
      {/* Force a rerender when isMobile changes */}
      <YoutubePlayer id={props.id} mobile={isMobile} />
      <ScoreResult
        p1Character="Bison"
        p2Character="Akuma"
        winner={1}
        roundsSetting={7}
        roundsWon={4}
        roundsLost={2}
      />
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
