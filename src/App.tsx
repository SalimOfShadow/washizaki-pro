import "./App.css";
import Hero, { PfpAnimation } from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import { fetchVideos, VideoInfo } from "./content/videos";
import Skill from "./components/Skill";
import { skills } from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import blogPosts from "./content/blogPosts";
import ContactForm from "./components/ContactForm";
import BlogPost from "./components/BlogPost";
import React from "react";
import {
  Character,
  CharacterName,
} from "./components/animations/character/Character";
import useWindowDimensions from "./utils/useWindowDimensions";
import { CharacterState, useCharacter } from "./contexts/CharacterContext";
import profilePicture from "./assets/profile-picture.png";
import { Explosion } from "./components/animations/kyo/explosion/Explosion";
import { changeTheme, useTheme } from "./contexts/ThemeContext";
import HeroHeading from "./components/HeroHeading";

const characterArray: CharacterName[] = ["kyo", "iori", "kula"];

function App() {
  const { theme, setTheme } = useTheme();
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [videosReady, setVideosReady] = useState<boolean>(false);

  const projectControls = useAnimation();
  const skillControls = useAnimation();

  const [projectRef, projectInView] = useInView({ triggerOnce: true });
  const [skillRef, skillInView] = useInView({ triggerOnce: true });

  const pageDimensions: { width: number; height: number } =
    useWindowDimensions();
  const { characterState, setCharacterState, characterName, setCharacterName } =
    useCharacter();
  const [characterPresent, setCharacterPresent] = useState<boolean>(false);
  const [explosions, setExplosions] = useState<React.ReactNode[]>([]);
  const [explosionsActive, setExplosionsActive] = useState<boolean>(false);
  const [pfpAnimation, setPfpAnimation] = useState<PfpAnimation>("idle");

  async function changeCharacter(characterSelected?: CharacterName) {
    setCharacterState("running-back");
    const wait = (ms: number | undefined) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await wait(1803);

    setCharacterPresent(true);
    if (!characterSelected) {
      setCharacterName(
        characterArray[
          (characterArray.indexOf(characterName) + 1) % characterArray.length
        ]
      );
      const newTheme = changeTheme(undefined, theme);
      setTheme(newTheme);
    } else {
      setCharacterName(characterSelected);
      const newTheme = changeTheme(characterSelected, undefined);
      setTheme(newTheme);
    }
    setCharacterState("running");
  }

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchVideos();
        setVideos(fetchedVideos);
        setVideosReady(true);
      } catch (error) {
        console.error("Failed to load videos:", error);
      }
    };

    loadVideos();
  }, []); // Empty dependency array to run once when the component mounts

  useEffect(() => {
    if (!explosionsActive) return;
    let currentDistance = 0;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        currentDistance += 130; // Increment distance by 100px for each Explosion
        setExplosions((prevExplosions) => [
          ...prevExplosions,
          <Explosion
            animationState="active"
            distance={`${currentDistance}px`}
            key={(Date.now() % 1000) + i}
          />,
        ]);
      }, i * 250); // Delay by 0.5 seconds for each component
    }

    setTimeout(() => {
      setExplosionsActive(false); // Adjust this as needed for your logic
    }, 1250); // Total time of explosions
  }, [explosionsActive]);

  useEffect(() => {
    if (pageDimensions.width > 1242 && characterState !== "running-back") {
      setCharacterPresent(true);
    } else {
      setCharacterPresent(false);
    }
  }, [pageDimensions]);

  useEffect(() => {
    if (videosReady && projectInView) {
      projectControls.start("visible");
    }
  }, [videosReady, projectInView, projectControls]);

  useEffect(() => {
    if (skillInView) {
      skillControls.start("visible");
    }
  }, [skillControls, skillInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
        changeCharacter={changeCharacter}
        characterState={characterState}
      />

      {characterPresent && ( // Conditionally render the character if characterPresent is true
        <div style={{ display: "flex", position: "relative" }}>
          {characterState === "running" || characterState === "running-back" ? (
            <motion.div
              initial={{
                x:
                  characterState === "running-back"
                    ? pageDimensions.width / 2 -
                      (characterName === "kyo" ||
                      characterName === "kula" ||
                      characterName === "bison"
                        ? 250
                        : -250) // Center with offset based on character
                    : characterName === "kyo" ||
                      characterName === "kula" ||
                      characterName === "bison"
                    ? -250 // Off-screen left for Kyo
                    : pageDimensions.width + 300, // Off-screen right for Iori
              }}
              animate={{
                x:
                  characterState === "running-back"
                    ? characterName === "kyo" ||
                      characterName === "kula" ||
                      characterName === "bison"
                      ? -250 // Back to off-screen left for Kyo
                      : pageDimensions.width + 300 // Back to off-screen right for Iori
                    : pageDimensions.width / 2 -
                      (characterName === "kyo" ||
                      characterName === "kula" ||
                      characterName === "bison"
                        ? 250
                        : -250), // Near-center position
              }}
              transition={{ duration: 1.5 }}
              onAnimationComplete={() => {
                if (characterState === "running") {
                  setCharacterState("neomax");

                  setTimeout(() => {
                    if (characterName === "kyo") {
                      setExplosionsActive(true);
                      setTimeout(() => setPfpAnimation("quake"), 1);
                      setTimeout(() => setPfpAnimation("idle"), 1300); // Makes it so it happens everytime kyo reappears
                    }
                  }, 1);
                  setTimeout(() => {
                    if (characterName === "iori") {
                      setTimeout(() => setPfpAnimation("scratched"), 100);
                      setTimeout(() => setPfpAnimation("idle"), 1300);
                    }
                  }, 600);
                  setTimeout(() => {
                    if (characterName === "kula") {
                      setTimeout(() => setPfpAnimation("frozen"), 1);
                      setTimeout(() => setPfpAnimation("idle"), 2100);
                    }
                  }, 600);
                  setTimeout(() => {
                    if (characterName === "bison") {
                      setTimeout(() => setPfpAnimation("quake"));
                      setTimeout(() => setPfpAnimation("idle"), 2100); // TODO - fix issue that causes the animation not to restart
                    }
                  }, 400);
                } else if (characterState === "running-back")
                  setCharacterPresent(false);
              }}
            >
              <Character />
            </motion.div>
          ) : (
            <div
              style={(() => {
                if (characterName === "bison") {
                  return {
                    position: "absolute",
                    top: 0,
                    left: `${pageDimensions.width / 2 - 200}px`, // Set to final position when standing
                    cursor: characterState === "final" ? "pointer" : "auto",
                  };
                } else {
                  return {};
                }
              })()}
              onClick={() => {
                if (characterState === "final") {
                  changeCharacter();
                }
              }}
            >
              <Character />
            </div>
          )}
        </div>
      )}
      <div
        onClick={async () => {
          if (characterState === "final") {
            changeCharacter();
          }
        }}
      >
        <Hero
          img={profilePicture}
          description={information.userData.description}
          title={information.userData.title}
          status={pfpAnimation}
          characterState={characterState}
        />
        <div>{explosions}</div>
      </div>
      {}

      <div className="hr"></div>
      <HeroHeading></HeroHeading>
      <section id="projects">
        <Heading firstWord="My" secondWord="Highlights" />
        <motion.div
          className="project-map"
          ref={projectRef}
          initial="hidden"
          animate={videosReady ? projectControls : "hidden"} // Wait until videos are ready
          variants={containerVariants} // Enables staggerChildren
        >
          {videosReady
            ? videos.map((video, index) => (
                <motion.div key={index} variants={projectVariants}>
                  <ProjectCard
                    videoId={video.videoId}
                    myCharacter={video.myCharacter}
                    opponentsCharacter={video.opponentsCharacter}
                    roundsSetting={video.roundsSetting}
                    roundsWon={video.roundsWon}
                    roundsLost={video.roundsLost}
                    matchWon={video.matchWon}
                  />
                </motion.div>
              ))
            : Array.from({ length: 5 }).map((_, index) => (
                <motion.div key={index} variants={projectVariants}>
                  <ProjectCard />
                </motion.div>
              ))}
        </motion.div>
      </section>

      <section id="skills">
        <Heading firstWord="Recently" secondWord="Played" />
        <motion.div
          className="skill-map"
          ref={skillRef}
          initial="hidden"
          animate={skillControls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill.name} url={skill.url} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
