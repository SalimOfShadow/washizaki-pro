import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import wipImage from "../assets/5578703.png";
import "../App.css";
import { animate, motion, useAnimation } from "framer-motion";
import { themeShadows, useTheme } from "../contexts/ThemeContext";
const animationConfig = {
  scale: 1,
  rotate: [
    5, 10, 15, 20, 15, 10, 5, 0, -5, -10, -15, -20, -15, -10, -5, 0, 5, 10, 15,
    20, 15, 10, 5, 0, -5, -10, -15, -20, -15, -10, -5, 0,
  ],
  transition: { duration: 0.5, ease: "easeInOut" },
};
const Skill = (props: { skill: string; url: string }) => {
  const controls = useAnimation();
  const [WIP, setIsWIP] = useState<boolean>(false);
  const { theme } = useTheme();
  useEffect(() => {
    if (
      props.skill.substring(props.skill.length - 7, props.skill.length - 4) ===
      "WIP"
    )
      setIsWIP(true);
  }, [WIP]);

  return (
    <div
      className="skill"
      style={{ boxShadow: `0 8px 32px 0 ${themeShadows[theme]}` }}
    >
      {WIP && (
        <motion.div
          className="wip-img"
          initial={{
            scale: 1,
          }}
          animate={controls}
          whileHover={animationConfig}
          onTouchStart={() => {
            controls.start(animationConfig);
          }}
        >
          <img src={wipImage}></img>
        </motion.div>
      )}
      <img
        src={`/games/${props.skill}`}
        alt=""
        className="skill-img"
        onClick={() => {
          window.open(props.url, "_blank");
        }}
      />
    </div>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;
