import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { CharacterState } from '../contexts/CharacterContext';
import glowAnimation from './animations/profile-picture/glow-effect.gif';
import frozenAnimation from './animations/profile-picture/frozen-effect.gif';
import psychoGlowAnimation from './animations/bison/psycho-glow/psycho-glow.gif';
import './animations/profile-picture/profile-animation.css';
import useWindowDimensions from '../utils/useWindowDimensions';
import { changeTheme, useTheme } from '../contexts/ThemeContext';

export type PfpAnimation =
  | 'idle'
  | 'quake'
  | 'scratched'
  | 'frozen'
  | 'psychoGlow'
  | 'scissor';

interface HeroProps {
  img: string;
  description: string;
  title: string;
  status: PfpAnimation;
  characterState: CharacterState;
}

const Hero = (props: HeroProps) => {
  const [pfpStatus, setPfpStatus] = useState<string>(props.status);
  const [canInteract, setCanInteract] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const [brightness, setBrightness] = useState<string>('100%');
  const { theme, setTheme } = useTheme();
  const [psychoGlowActive, setPsychoGlowActive] = useState<boolean>(false);
  const pageDimensions: { width: number; height: number } =
    useWindowDimensions();
  const [isPageMobile, setIsPageMobile] = useState<boolean>(
    pageDimensions.width < 1242 ? true : false
  );

  useEffect(() => {
    setTimeout(() => {
      setPsychoGlowActive(false);
    }, 1750);
  }, [psychoGlowActive]);

  useEffect(() => {
    if (pageDimensions.width < 1242) {
      setIsPageMobile(true);
    } else {
      setIsPageMobile(false);
    }
  }, [pageDimensions.width]);

  useEffect(() => {
    if (props.characterState === 'final' || isPageMobile) {
      setOpacity(1);
      setCanInteract(true);
      setPsychoGlowActive(false);
    } else {
      setOpacity(0);
      setBrightness('100%');
      setTimeout(() => {
        setCanInteract(false);
      }, 400);
    }
  }, [props.characterState]);

  useEffect(() => {
    switch (props.status) {
      case 'quake':
        setPfpStatus('quake');
        setPsychoGlowActive(true);
        console.log('SHOULD FIRE SCISSOR');
        setTimeout(() => setPfpStatus('idle'), 2600);
        setTimeout(() => setPfpStatus('psychoGlow'), 600);
        setTimeout(() => setPfpStatus('scissor'), 2300);
        break;

      case 'scratched':
        currentRotation -= 360;
        setPfpStatus('scratched');
        setTimeout(() => setPfpStatus('idle'), 1400);
        break;

      case 'frozen':
        setPfpStatus('frozen');
        setTimeout(() => setPfpStatus('idle'), 1900);
        break;
      default:
        setPfpStatus(props.status);
        break;
    }
  }, [props.status]);

  let currentRotation: number = -360;
  const animations = {
    idle: {
      x: 0,
      y: 0,
      rotate: currentRotation,
      scale: canInteract && opacity !== 0 ? 1.1 : 1, // If the avatar is interactable,and the glowing effect is active,then the scale should enlarge by a tiny bit
    },
    quake: {
      x: [0, -10, 10, -5, 5, 0],
      y: [0, -10, 5, 10, -5, 0],
      rotate: [
        currentRotation,
        currentRotation + 10,
        currentRotation + 20,
        currentRotation + 30,
        currentRotation + 20,
        currentRotation + 10,
        currentRotation,
        currentRotation - 10,
        currentRotation - 20,
        currentRotation - 30,
        currentRotation - 20,
        currentRotation - 10,
        currentRotation,
      ],
      transition: { duration: 0.32, repeat: Infinity, ease: 'easeInOut' },
      scale: 1,
    },
    scratched: {
      x: [
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0, 0, -20, 20, -15, 15, 0,
        0, -20, 20, -15, 15, 0,
      ],
      y: [0, -80, -80, -80, -20, 0],
      rotate: [0, -360],
      transition: {
        duration: 1.15,
        ease: 'easeInOut',
      },
      scale: 1,
    },
    frozen: {
      x: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, -10, 10, -5, 5, 0, -10, 10, -5, 5, 0, 0, -10, 10, -5, 5, 0,
        -10, 10, -5, 5, 0, 0, -10, 10, -5, 5, 0, -10, 10, -5, 5, 0,
      ],
      rotate: [currentRotation],
      transition: { duration: 2.52, repeat: Infinity, ease: 'easeInOut' },
      scale: [1, 1, , 1, 1.1, 1.1, 1],
    },
    psychoGlow: {
      x: 0,
      y: 0,
      rotate: currentRotation,
      scale: 1,
    },
    scissor: {
      x: [0, -10, 10, -5, 5, 0],
      y: [0, -10, 5, 10, -5, 0],
      rotate: [
        currentRotation,
        currentRotation + 10,
        currentRotation + 20,
        currentRotation + 30,
        currentRotation + 20,
        currentRotation + 10,
        currentRotation,
        currentRotation - 10,
        currentRotation - 20,
        currentRotation - 30,
        currentRotation - 20,
        currentRotation - 10,
        currentRotation,
      ],
      transition: { duration: 0.32, repeat: Infinity, ease: 'easeInOut' },
      scale: 1,
    },
  };

  return (
    <div className="profile-container">
      <motion.div
        initial={{ scale: 0 }}
        animate={pfpStatus}
        variants={animations}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={
          canInteract && opacity !== 0
            ? { scale: 1.2, filter: 'brightness(115%)' }
            : { filter: `brightness(${brightness}) ` }
        }
        whileTap={
          canInteract
            ? {
                scale: 1.25,
                filter: 'brightness(125%)',
              }
            : {}
        }
        className="pfp"
      >
        <img
          src={props.img}
          alt=""
          style={{ width: 150, height: 150 }}
          draggable="false"
        />
        {(canInteract || isPageMobile) && (
          <motion.div
            key="glow"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={glowAnimation}
              className="profile-glow-image"
              alt="Glow effect"
              style={{ opacity }}
              onClick={async () => {
                if (isPageMobile) {
                  const wait = (ms: number | undefined) =>
                    new Promise((resolve) => setTimeout(resolve, ms));
                  await wait(200);
                  const newTheme = changeTheme(undefined, theme);
                  setTheme(newTheme);
                }
              }}
              draggable="false"
            />
          </motion.div>
        )}
        {pfpStatus === 'frozen' && (
          <motion.div
            key="frozen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={frozenAnimation}
              className="profile-frozen-image"
              alt="Frozen effect"
              style={{ opacity: 1 }}
              onClick={async () => {
                return;
              }}
              draggable="false"
            />
          </motion.div>
        )}
        {(psychoGlowActive || props.status === 'psychoGlow') && (
          <motion.div
            key="psychoGlow"
            initial={{ scale: 0.4, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={psychoGlowAnimation}
              className="psycho-glow-image"
              alt="PsychoGlow effect"
              style={{ opacity: 1 }}
              onClick={async () => {
                return;
              }}
              draggable="false"
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
