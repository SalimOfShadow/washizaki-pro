// Character.tsx
import React, { useEffect } from 'react';
import {
  CharacterState,
  useCharacter,
} from '../../../contexts/CharacterContext';
// Kyo
import kyoRunningGif from '../../../assets/characters-gif/kyo/kyo-running.gif';
import kyoStandingGif from '../../../assets/characters-gif/kyo/kyo-winpose.gif';
import kyoNeomaxGif from '../../../assets/characters-gif/kyo/kyo-neomax.gif';
import kyoFinalGif from '../../../assets/characters-gif/kyo/kyo-final.gif';
import { FireRing } from '../kyo/fire-ring/FireRing';
// Iori
import ioriRunningGif from '../../../assets/characters-gif/iori/iori-running.gif';
import ioriStandingGif from '../../../assets/characters-gif/iori/iori-winpose.gif';
import ioriNeomaxGif from '../../../assets/characters-gif/iori/iori-neomax.gif';
import ioriFinalGif from '../../../assets/characters-gif/iori/iori-final.gif';
// Kula
import kulaRunningGif from '../../../assets/characters-gif/kula/kula-running.gif';
import kulaStandingGif from '../../../assets/characters-gif/kula/kula-winpose.gif';
import kulaNeomaxGif from '../../../assets/characters-gif/kula/kula-neomax.gif';
import kulaFinalGif from '../../../assets/characters-gif/kula/kula-final.gif';
// Bison
import bisonRunningGif from '../../../assets/characters-gif/bison/bison-running.gif';
import bisonStandingGif from '../../../assets/characters-gif/bison/bison-winpose.gif';
import bisonNeomaxGif from '../../../assets/characters-gif/bison/bison-neomax.gif';
import bisonScissorGif from '../../../assets/characters-gif/bison/bison-scissor.gif';
import bisonTurningGif from '../../../assets/characters-gif/bison/bison-turning.gif';
import bisonFinalGif from '../../../assets/characters-gif/bison/bison-final.gif';

import './character.css';
import { motion } from 'framer-motion';
import { Scratch } from '../iori/scratch/Scratch';
import { Breath } from '../kula/breath/Breath';
import { Snowman } from '../kula/snowman/Snowman';
import { useState } from 'react';
import { Foxy } from '../kula/foxy/Foxy';
import { PsychoCrusher } from '../bison/psycho-crusher/PsychoCrusher';

export type CharacterName = 'kyo' | 'iori' | 'kula' | 'bison';

export const Character: React.FC = () => {
  const [foxyPresent, setFoxyPresent] = useState<boolean>(false);

  const { characterState, setCharacterState, characterName, setCharacterName } =
    useCharacter();

  useEffect(() => {
    if (foxyPresent) {
      setTimeout(() => {
        setFoxyPresent(false);
      }, 2000);
    }
  });
  const gifs: Record<CharacterName, Record<CharacterState, string>> = {
    kyo: {
      running: kyoRunningGif,
      neomax: kyoNeomaxGif,
      standing: kyoStandingGif,
      final: kyoFinalGif,
      'running-back': kyoRunningGif,
      scissor: bisonScissorGif,
      turning: bisonScissorGif,
    },
    iori: {
      running: ioriRunningGif,
      neomax: ioriNeomaxGif,
      standing: ioriStandingGif,
      final: ioriFinalGif,
      'running-back': ioriRunningGif,
      scissor: bisonScissorGif,
      turning: bisonScissorGif,
    },
    kula: {
      running: kulaRunningGif,
      neomax: kulaNeomaxGif,
      standing: kulaStandingGif,
      final: kulaFinalGif,
      'running-back': kulaRunningGif,
      scissor: bisonScissorGif,
      turning: bisonScissorGif,
    },
    bison: {
      running: bisonRunningGif,
      neomax: bisonNeomaxGif,
      standing: bisonStandingGif,
      final: bisonFinalGif,
      'running-back': bisonRunningGif,
      scissor: bisonScissorGif,
      turning: bisonTurningGif,
    },
  };

  const getGif = (
    characterName: CharacterName,
    characterState: CharacterState
  ): string => {
    return gifs[characterName][characterState] || gifs[characterName].standing;
  };

  useEffect(() => {
    // Neomax Timing

    // Kyo's timing
    if (characterState === 'neomax' && characterName === 'kyo')
      setTimeout(() => {
        setCharacterState('standing');
      }, 3200);

    // Iori's timing
    if (characterState === 'neomax' && characterName === 'iori')
      setTimeout(() => {
        setCharacterState('standing');
      }, 1850); // 11

    // Kula's timing
    if (characterState === 'neomax' && characterName === 'kula')
      setTimeout(() => {
        setCharacterState('standing');
      }, 1600);

    // Bison's timing
    if (characterState === 'neomax' && characterName === 'bison') {
      setTimeout(() => {
        setCharacterState('turning'); // Change to 'turning' after 1.2 seconds
        setTimeout(() => {
          setCharacterState('scissor'); // Change to 'scissor' after another 1.2 seconds
          setTimeout(() => {
            setCharacterState('standing'); // Change to 'standing' after 0.8 seconds from 'scissor'
          }, 800);
        }, 1200);
      }, 1200); // Delay before changing to 'turning'
    }
    // Neomax to Final
    if (characterState === 'standing' && characterName !== 'kula') {
      setTimeout(() => {
        setCharacterState('final');
      }, 1200);
    } else if (characterState === 'standing' && characterName === 'kula') {
      setFoxyPresent(true);
      setTimeout(() => {
        setTimeout(() => {
          setCharacterState('final');
        }, 1400);
        setTimeout(() => {
          setFoxyPresent(false);
        }, 2600);
      });
    }
  }, [characterState]);

  return (
    <div
      className={characterName + '-character'}
      // style={
      //   characterName === 'bison' && characterState === 'running'
      //     ? { width: '9px', height: '42px' }
      //     : {}
      // }
    >
      {/* Bison's effect */}
      {characterState === 'neomax' && characterName === 'bison' && (
        <PsychoCrusher animationState="active" />
      )}

      <motion.div
        initial={{ x: 0 }} // Initial position at x=0
        animate={{
          x:
            characterName === 'bison' &&
            (characterState === 'neomax' ||
              characterState === 'scissor' ||
              characterState === 'turning')
              ? characterState === 'scissor'
                ? 0 // Move back to 0px when in 'scissor' or 'standing'
                : 600 // Stay at 600px during 'neomax' or 'turning'
              : 0, // No movement if conditions don't match
        }}
        transition={{
          duration: characterState === 'scissor' ? 0.7 : 1.2, // Make 'scissor' (right to left) twice as fast
          ease: 'easeInOut', // Smooth easing
        }}
      >
        <img
          src={getGif(characterName, characterState)}
          alt={`Character is ${characterState}`}
          className={characterName + '-character-image'}
          style={{
            ...(characterState === 'running-back' && {
              transform: 'scaleX(-1)',
            }),
            ...(characterName === 'iori' &&
              characterState === 'neomax' && {
                width: '300px',
                height: '230px',
              }),
            ...(characterName === 'kula' &&
              characterState === 'final' && {
                transform: 'translateX(25px)',
                height: '326px',
              }),
          }}
        />
      </motion.div>
    </div>
  );
};
