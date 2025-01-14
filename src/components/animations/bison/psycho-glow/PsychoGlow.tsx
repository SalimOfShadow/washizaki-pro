import React, { useState } from "react";
import "./psycho-glow.css";
import psychoGlowImage from "./psycho-glow.gif";
import { motion } from "framer-motion";
type PsychoGlowState = "active" | "inactive";

type PsychoGlowProps = {
  animationState: PsychoGlowState;
};

export const PsychoGlow = (props: PsychoGlowProps) => {
  const [animationState, setAnimationState] = useState<PsychoGlowState>(
    props.animationState
  );

  if (animationState === "active") {
    setTimeout(() => {
      setAnimationState("inactive");
    }, 300);
  }

  return (
    <>
      {animationState === "active" && (
        <div className="psycho-glow">
          <motion.div>
            <img src={psychoGlowImage} alt="psycho-glow" className="psycho-glow-img" />
          </motion.div>
        </div>
      )}
    </>
  );
};
