import * as React from "react";
import { Avatar } from "@mui/joy";
import { motion } from "framer-motion";
import kyoAvatar from "../../assets/characters-icon/kyo-icon.png";
import ioriAvatar from "../../assets/characters-icon/iori-icon.png";
import kulaAvatar from "../../assets/characters-icon/kula-icon.png";
import bisonAvatar from "../../assets/characters-icon/USF4-characters/bison-icon.png";
import { changeTheme, useTheme } from "../../contexts/ThemeContext";
import "./character-select.css";
import { CharacterName } from "../animations/character/Character";
import { useState, useEffect } from "react";
import { CharacterState, useCharacter } from "../../contexts/CharacterContext";
import useWindowDimensions from "../../utils/useWindowDimensions";

const avatars = [
  { character: "kyo", theme: "blue", src: kyoAvatar },
  { character: "iori", theme: "red", src: ioriAvatar },
  { character: "kula", theme: "aqua", src: kulaAvatar },
  { character: "bison", theme: "magenta", src: bisonAvatar },
];

const CharacterSelect = (props: {
  changeCharacterFunction: (characterName: CharacterName) => void;
}) => {
  const { theme, setTheme } = useTheme();
  const [canSwitchCharacter, setCanSwitchCharacter] = useState<boolean>(false);
  const { characterName, setCharacterName, characterState } = useCharacter();
  const [currentCharacter, setCurrentCharacter] = useState<CharacterName>(
    "bison" as CharacterName // Default to 'kyo' if no match
  );
  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null); // Track hovered avatar
  const pageDimensions: { width: number; height: number } =
    useWindowDimensions();
  const [isPageMobile, setIsPageMobile] = useState<boolean>(
    pageDimensions.width < 1242 ? true : false
  );
  useEffect(() => {
    if (pageDimensions.width < 1242) {
      setIsPageMobile(true);
    } else {
      setIsPageMobile(false);
    }
  }, [pageDimensions.width]);

  useEffect(() => {
    if (characterState === "final") {
      setCanSwitchCharacter(true);
    } else {
      setCanSwitchCharacter(false);
    }
  }, [characterState]); // Add dependency here

  useEffect(() => {
    const newCharacter: CharacterName = avatars.find(
      (avatar) => avatar.theme === theme
    )?.character as CharacterName;
    setCurrentCharacter(newCharacter); // Set the character based on the theme change
  }, [theme]); // Re-run whenever the theme changes

  const getBoxShadow = (character: string): string => {
    if (hoveredAvatar === character) {
      switch (character) {
        case "kyo":
          return "0px 0px 6px 1px rgba(0, 0, 255, 0.7)"; // Blue for Kyo
        case "iori":
          return "0px 0px 6px 1px rgba(255, 0, 0, 0.7)"; // Red for Iori
        case "kula":
          return "0px 0px 6px 1px rgba(0, 255, 255, 0.7)"; // Aqua for Kula
        default:
          return ""; // No box shadow when not hovered
      }
    }
    return ""; // No box shadow by default
  };

  return (
    <div className="character-select-container">
      {avatars.map((avatar) => (
        <motion.div
          key={(Date.now() % 1000) + avatar.character}
          draggable="false"
          whileTap={
            (canSwitchCharacter && avatar.character !== currentCharacter) ||
            isPageMobile
              ? {
                  scale: 0.75,
                  boxShadow: undefined,
                }
              : {}
          }
          whileHover={
            (canSwitchCharacter && avatar.character !== currentCharacter) ||
            isPageMobile
              ? {
                  scale: 1.1,
                  filter: "brightness(120%)",
                }
              : {}
          }
          transition={{ duration: 0.2 }}
          style={{
            pointerEvents: canSwitchCharacter ? "auto" : "none",
          }}
        >
          <Avatar
            className={`character-icon ${
              theme !== avatar.theme ? "is-grayed" : ""
            }`}
            src={avatar.src}
            style={{
              pointerEvents:
                canSwitchCharacter || isPageMobile ? "auto" : "none",
              boxShadow:
                avatar.character !== currentCharacter && !isPageMobile
                  ? getBoxShadow(avatar.character)
                  : undefined,
            }}
            sx={{
              "&:focus": { outline: "none" }, // Remove focus outline for MUI-specific handling
            }}
            draggable={false} // Attempt to disable dragging
            onDragStart={(e) => e.preventDefault()} // Explicitly prevent dragging
            onContextMenu={(e) => e.preventDefault()} // Prevent long-press context menu
            onMouseEnter={() => setHoveredAvatar(avatar.character)} // Set hovered avatar
            onMouseLeave={() => setHoveredAvatar(null)} // Reset hover state
            onClick={async () => {
              if (isPageMobile) {
                const wait = (ms: number | undefined) =>
                  new Promise((resolve) => setTimeout(resolve, ms));
                await wait(200);
                setTheme("magenta");
                return;
              } else if (
                canSwitchCharacter &&
                avatar.character !== currentCharacter
              ) {
                props.changeCharacterFunction(
                  avatar.character as CharacterName
                );
              }
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CharacterSelect;
