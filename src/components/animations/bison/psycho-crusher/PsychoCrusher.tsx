import React, { useEffect, useState } from "react";
import "./psycho-crusher.css";
import psychoCrusherImage from "./psycho-crusher.gif";
import { motion } from "framer-motion";

type PsychoCrusherState = "active" | "inactive";

type PsychoCrusherProps = {
  animationState: PsychoCrusherState;
};

export const PsychoCrusher = (props: PsychoCrusherProps) => {
  const [animationState, setAnimationState] = useState<PsychoCrusherState>(
    props.animationState
  );

  const [psychoActive, setPsychoActive] = useState<boolean>(false);

  if (animationState === "active") {
    setTimeout(() => {
      setAnimationState("inactive");
    }, 1800);
  }
  return (
    <>
      {animationState === "active" && (
        <div className="PsychoCrusher">
          <motion.div>
            <img
              src={psychoCrusherImage}
              alt="PsychoCrusher"
              className="PsychoCrusher-img"
            />
          </motion.div>
        </div>
      )}
      <PsychoCrusher animationState="active"></PsychoCrusher>
    </>
  );
};
