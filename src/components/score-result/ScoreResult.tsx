import * as React from "react";
import { Avatar } from "@mui/joy";
import { motion } from "framer-motion";
import { CharacterIcon, USF4Character, characterIcons } from "./USF4Character";

import vsIcon from "../../assets/characters-icon/vs-icon.png";
import winIcon from "../../assets/match-icon/win.png";
import defeatIcon from "../../assets/match-icon/defeat.png";
import unknownIcon from "../../assets/characters-icon/USF4-characters/unknown-icon.png";

import "./score-result.css";
import useWindowDimensions from "../../utils/useWindowDimensions";

type PlayerNumbers = 1 | 2;
type PossibleRounds = 1 | 3 | 5 | 7;

interface PlayerScore {
  playerNumber: PlayerNumbers;
  roundsNumber: PossibleRounds;
  roundsWon: number;
  roundsLost: number;
  character: CharacterIcon;
  hasWon: boolean;
}

interface ScoreResultProps {
  p1Character: USF4Character;
  p2Character: USF4Character;
  winner: PlayerNumbers;
  roundsSetting: PossibleRounds;
  roundsWon: number;
  roundsLost: number;
}

const ScoreResult = (props: ScoreResultProps) => {
  const p1Character: CharacterIcon = characterIcons.find(
    (icon) => icon.character === props.p1Character
  )!;
  const p2Character: CharacterIcon = characterIcons.find(
    (icon) => icon.character === props.p2Character
  )!;

  const player1Score: PlayerScore = {
    playerNumber: 1,
    roundsNumber: props.roundsSetting,
    character: p1Character || "UNKNOWN",
    hasWon: props.winner === 1 ? true : false,
    roundsWon: props.roundsWon,
    roundsLost: props.roundsLost,
  };

  const player2Score: PlayerScore = {
    playerNumber: 2,
    roundsNumber: props.roundsSetting,
    character: p2Character || "UNKNOWN",
    hasWon: props.winner === 2 ? true : false,
    roundsWon: props.roundsWon,
    roundsLost: props.roundsLost,
  };

  return (
    <div className="score-result-container">
      <PlayerScore playerScore={player1Score}></PlayerScore>
      <div className="versus-icon">
        <img alt="Versus Icon" src={vsIcon} />
      </div>
      <PlayerScore playerScore={player2Score}></PlayerScore>
    </div>
  );
};

const PlayerScore = (props: any) => {
  const { width } = useWindowDimensions();
  const [showRounds, setShowRounds] = React.useState<boolean>(false);

  // Check window size and set the isMobile state
  React.useEffect(() => {
    if (width < 847.778) setShowRounds(true);
    else setShowRounds(false);
  }, [width]); // Now we depend on width to handle window size change

  const playerScore = props.playerScore;
  const playerNumber: number = playerScore.playerNumber;
  const roundsNumber: PossibleRounds = playerScore.roundsNumber;
  const roundsWon: number = playerScore.roundsWon;
  const roundsLost: number = playerScore.roundsLost;
  const roundsIconArray = [];
  const character = playerScore.character;
  console.log(`RoundsWon ${roundsWon} RoundsLost ${roundsLost}`);
  for (let i = 0; i < (roundsNumber + 1) / 2; i++) {
    if (playerNumber === 1) {
      if (i < roundsWon) {
        roundsIconArray.push(
          <div className="round-icon secondary-icon">
            <img key={i} alt="Round Icon" src={winIcon} />
          </div>
        );
      } else {
        roundsIconArray.push(
          <div className="round-icon secondary-icon">
            <img key={i} alt="Round Icon" src={defeatIcon} />
          </div>
        );
      }
    } else {
      if (i < roundsLost) {
        roundsIconArray.push(
          <div className="round-icon secondary-icon">
            <img key={i} alt="Round Icon" src={defeatIcon} />
          </div>
        );
      } else {
        roundsIconArray.push(
          <div className="round-icon secondary-icon">
            <img key={i} alt="Round Icon" src={winIcon} />
          </div>
        );
      }
    }
  }

  return (
    <div
      className={`score-result-container player-${playerNumber}`}
      style={{
        marginTop: "25px",
        backgroundColor: "transparent",
        opacity: playerScore.hasWon === true ? 1 : 0.6,
      }}
    >
      {playerNumber === 1 ? (
        <div
          className="player-1-container"
          style={{
            gap: roundsNumber === 7 ? "5px" : "10px",
            marginLeft: showRounds ? "50px" : undefined,
          }}
        >
          <div className="main-character-icon player-1 primary-icon">
            <img
              alt="Main Character Icon"
              src={character.src || unknownIcon}
              className={playerScore.hasWon ? "winning" : ""}
            />
          </div>
          {!showRounds && roundsIconArray}
          {/* TODO : ADD NEW WIN / LOSS STATS */}
        </div>
      ) : (
        <div
          className="player-2-container"
          style={{
            gap: roundsNumber === 7 ? "5px" : "10px",
            marginRight: showRounds ? "50px" : undefined,
          }}
        >
          {!showRounds && roundsIconArray}
          <div className="main-character-icon player-2 primary-icon">
            <img
              alt="Main Character Icon"
              src={character.src || unknownIcon}
              className={playerScore.hasWon ? "winning" : ""}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreResult;
