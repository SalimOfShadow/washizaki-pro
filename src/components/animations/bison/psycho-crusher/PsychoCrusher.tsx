import React, { useEffect, useState } from 'react';
import './psycho-crusher.css';
import psychoCrusherImage from './psycho-crusher.gif';
import { motion } from 'framer-motion';

type PsychoCrusherState = 'active' | 'inactive';

type PsychoCrusherProps = {
  animationState: PsychoCrusherState;
};

export const PsychoCrusher = (props: PsychoCrusherProps) => {
  const [animationState, setAnimationState] = useState<PsychoCrusherState>(
    props.animationState
  );

  const [psychoActive, setPsychoActive] = useState<boolean>(false);

  useEffect(() => {
    if (psychoActive === false) {
      setTimeout(() => {
        setPsychoActive(true);
      }, 180);
    }
  }, [psychoActive]);

  if (animationState === 'active') {
    setTimeout(() => {
      setAnimationState('inactive');
    }, 1100);
  }
  return (
    <>
      {animationState === 'active' && psychoActive && (
        <div className="psycho-crusher">
          <motion.div
            initial={{ x: -140, opacity: 0.85 }}
            animate={{ x: 385, opacity: 0.85 }}
            transition={{ duration: 1.1 }}
          >
            <img
              src={psychoCrusherImage}
              alt="Psycho Crusher"
              className="psycho-crusher-img"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
