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
  console.log(`THIS IS THE ID : ${props.videoId}`);
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
      <YoutubePlayer id={props.videoId} mobile={isMobile} />
      <ScoreResult
        p1Character={props.myCharacter}
        p2Character={props.opponentsCharacter}
        winner={props.matchWon === true ? 1 : 2} // TODO - USE P1 AND P2 INSTEAD OF myCharacter etc
        roundsSetting={props.roundsSetting}
        roundsWon={props.roundsWon}
        roundsLost={props.roundsLost}
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
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  img: PropTypes.string,
  source: PropTypes.string,
  preview: PropTypes.string,
};

export default ProjectCard;
