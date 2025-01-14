// Character.tsx
import React, { useEffect } from "react";
import {
  CharacterState,
  useCharacter,
} from "../../../contexts/CharacterContext";
// Kyo
import kyoRunningGif from "../../../assets/characters-gif/kyo/kyo-running.gif";
import kyoStandingGif from "../../../assets/characters-gif/kyo/kyo-winpose.gif";
import kyoNeomaxGif from "../../../assets/characters-gif/kyo/kyo-neomax.gif";
import kyoFinalGif from "../../../assets/characters-gif/kyo/kyo-final.gif";
import { FireRing } from "../kyo/fire-ring/FireRing";
// Iori
import ioriRunningGif from "../../../assets/characters-gif/iori/iori-running.gif";
import ioriStandingGif from "../../../assets/characters-gif/iori/iori-winpose.gif";
import ioriNeomaxGif from "../../../assets/characters-gif/iori/iori-neomax.gif";
import ioriFinalGif from "../../../assets/characters-gif/iori/iori-final.gif";
// Kula
import kulaRunningGif from "../../../assets/characters-gif/kula/kula-running.gif";
import kulaStandingGif from "../../../assets/characters-gif/kula/kula-winpose.gif";
import kulaNeomaxGif from "../../../assets/characters-gif/kula/kula-neomax.gif";
import kulaFinalGif from "../../../assets/characters-gif/kula/kula-final.gif";
// Bison
import bisonRunningGif from "../../../assets/characters-gif/bison/bison-running.gif";
import bisonStandingGif from "../../../assets/characters-gif/bison/bison-winpose.gif";
import bisonNeomaxGif from "../../../assets/characters-gif/bison/bison-neomax.gif";
import bisonScissorGif from "../../../assets/characters-gif/bison/bison-scissor.gif";
import bisonFinalGif from "../../../assets/characters-gif/bison/bison-final.gif";

import "./character.css";
import { motion } from "framer-motion";
import { Scratch } from "../iori/scratch/Scratch";
import { Breath } from "../kula/breath/Breath";
import { Snowman } from "../kula/snowman/Snowman";
import { useState } from "react";
import { Foxy } from "../kula/foxy/Foxy";

export type CharacterName = "kyo" | "iori" | "kula" | "bison";

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
      "running-back": kyoRunningGif,
      scissor: bisonScissorGif,
      turning: bisonScissorGif
    },
    iori: {
      running: ioriRunningGif,
      neomax: ioriNeomaxGif,
      standing: ioriStandingGif,
      final: ioriFinalGif,
      "running-back": ioriRunningGif,
      scissor: bisonScissorGif,
      turning: bisonScissorGif
    },
    kula: {
      running: kulaRunningGif,
      neomax: kulaNeomaxGif,
      standing: kulaStandingGif,
      final: kulaFinalGif,
      "running-back": kulaRunningGif,
      scissor: bisonScissorGif,
      turning: bisonScissorGif
    },
    bison: {
      running: bisonRunningGif,
      neomax: bisonNeomaxGif,
      standing: bisonStandingGif,
      final: bisonFinalGif,
      "running-back": bisonRunningGif,
      scissor: bisonScissorGif,
      turning: bisonScissorGif
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
    if (characterState === "neomax" && characterName === "kyo")
      setTimeout(() => {
        setCharacterState("standing");
      }, 3200);

    // Iori's timing
    if (characterState === "neomax" && characterName === "iori")
      setTimeout(() => {
        setCharacterState("standing");
      }, 1850); // 11

    // Kula's timing
    if (characterState === "neomax" && characterName === "kula")
      setTimeout(() => {
        setCharacterState("standing");
      }, 1600);
    
      // Bison's timing
    if (characterState === "neomax" && characterName === "bison")
      
      setTimeout(() => {
        setCharacterState("scissor")   
        setTimeout(() => {
          setCharacterState("standing");
        }, 1200);
      },1000)

    // Neomax to Final
    if (characterState === "standing" && characterName !== "kula") {
      setTimeout(() => {
        setCharacterState("final");
      }, 1200);
    } else if (characterState === "standing" && characterName === "kula") {
      setFoxyPresent(true);
      setTimeout(() => {
        setTimeout(() => {
          setCharacterState("final");
        }, 1400);
        setTimeout(() => {
          setFoxyPresent(false);
        }, 2600);
      });
    }
  }, [characterState]);

  return (
    <div
      className={characterName + "-character"}
      style={
        characterName === "iori" && characterState === "neomax"
          ? { top: "-35px" }
          : {}
      }
    >
      {/* Kyo's effect */}
      {characterState === "neomax" && characterName === "kyo" && (
        <FireRing animationState="active"></FireRing>
      )}

      {/* Iori's effect */}
      {characterState === "neomax" && characterName === "iori" && (
        <Scratch animationState="active" />
      )}

      {/* Kula's effect */}
      {characterState === "neomax" && characterName === "kula" && (
        <Breath animationState="active" />
      )}
      {foxyPresent && characterName === "kula" && (
        <Foxy animationState="active" />
        // <Snowman animationState="active" />
      )}
      {/* Bison's effect */}
      
      {/* Iori's effect */}
      {characterState === "neomax" && characterName === "bison" && (
        <Scratch animationState="active" />
      )}
    
    <motion.div
  initial={{ x: 0 }} // initial position
  animate={{
    x: (characterName === 'bison' && (characterState === 'neomax' || characterState === 'scissor'))
      ? [0, 600, 600, 0]  // Keyframe sequence: move to 600px, idle, then return to 0px
      : 0  // No movement if conditions don't match
  }}
  transition={{
    duration: 2, // Total duration for the animation
    ease: 'easeInOut', // Smooth easing for both moves
    times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Smooth transition between keyframes
  }}
>
        <img
          src={getGif(characterName, characterState)}
          alt={`Character is ${characterState}`}
          className={characterName + "-character-image"}
          style={{
            ...(characterState === "running-back" && {
              transform: "scaleX(-1)",
            }),
            ...(characterName === "iori" &&
              characterState === "neomax" && {
                width: "300px",
                height: "230px",
              }),
            ...(characterName === "kula" &&
              characterState === "final" && {
                transform: "translateX(25px)",
                height: "326px",
              }),
          }}
        />
      </motion.div>
    </div>
  );
};
