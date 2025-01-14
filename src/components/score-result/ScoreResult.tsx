import * as React from "react";
import { Avatar } from "@mui/joy";
import { motion } from "framer-motion";
import  {CharacterIcon, USF4Character,characterIcons} from "./USF4Character";
import vsIcon from "../../assets/characters-icon/vs-icon.png"
import winIcon from "../../assets/match-icon/win.png"
import defeatIcon from "../../assets/match-icon/defeat.png"


import "./score-result.css";
import useWindowDimensions from "../../utils/useWindowDimensions";

type PlayerNumbers = 1 | 2
type PossibleRounds = 1 | 3 | 5 | 7;

interface PlayerScore {
    playerNumber: PlayerNumbers
    roundsNumber: PossibleRounds
    roundsWon: number
    roundsLost: number
    character: CharacterIcon
    hasWon: boolean
}

interface ScoreResultProps {
    p1Character: USF4Character,
    p2Character: USF4Character
    matchWon: boolean;
    roundsSetting: PossibleRounds;
    roundsWon: number;
    roundsLost: number;
}


const ScoreResult = (props: ScoreResultProps) => {

    
    const rounds: PossibleRounds = props.roundsSetting;
    const p1Character: CharacterIcon =  characterIcons.find(icon => icon.character === props.p1Character)!
    const p2Character: CharacterIcon =  characterIcons.find(icon => icon.character === props.p2Character)!

    const player1Score: PlayerScore = {
        playerNumber: 1,
        roundsNumber: props.roundsSetting,
        character: p1Character,
        hasWon: props.matchWon,
        roundsWon: props.roundsWon,
        roundsLost: props.roundsLost
    }

    const player2Score: PlayerScore = {
        playerNumber: 2,
        roundsNumber: props.roundsSetting,
        character: p2Character,
        hasWon: props.matchWon,
        roundsWon: props.roundsWon,
        roundsLost: props.roundsLost
    }
    
    return (
        <div className="score-result-container">
    
        <PlayerScore playerScore={player1Score}></PlayerScore>
        <div className="versus-icon">
                <img 
                    alt="Versus Icon" 
                    src={vsIcon} 
                />
                </div>
        <PlayerScore playerScore={player2Score}></PlayerScore>

        </div>
    );
};

const PlayerScore = (props: any) => {

    const {width} = useWindowDimensions();
    const [isMobile,setIsMobile] = React.useState<boolean>(false)
    React.useEffect(() => {
      if (width < 1242) setIsMobile(true)
    },[isMobile])
    
    const playerScore = props.playerScore
    const playerNumber: number = playerScore.playerNumber;
    const roundsNumber: PossibleRounds = playerScore.roundsNumber;
    const roundsWon: number = playerScore.roundsWon
    const roundsLost: number = playerScore.roundsLost
    const roundsIconArray = [];
    const character = playerScore.character;
    console.log(`RoundsWon ${roundsWon} RoundsLost ${roundsLost}`)
    for (let i = 0; i < (roundsNumber + 1) / 2; i++) {
        if (playerNumber === 1){
          if (i < roundsWon) {
                roundsIconArray.push(
                    <div className="round-icon secondary-icon">
                    <img
                        key={i}
                        alt="Round Icon"
                        src={winIcon} 
                        />
                </div>
            );
        }else{
            roundsIconArray.push(
                <div className="round-icon secondary-icon">
                    <img
                        key={i}
                        alt="Round Icon"
                        src={defeatIcon} 
                        />
                </div>)
        }
    }else{
        if (i < roundsLost) {
                roundsIconArray.push(
                    <div className="round-icon secondary-icon">
                    <img
                        key={i}
                        alt="Round Icon"
                        src={defeatIcon} 
                        />
                </div>
            );
        }
        else{
                roundsIconArray.push(
                    <div className="round-icon secondary-icon">
                        <img
                            key={i}
                            alt="Round Icon"
                            src={winIcon} 
                            />
                    </div>)
        }
    }
    }

    return (
        <div
            className={`score-result-container player-${playerNumber}`}
            style={{
                marginTop: "25px",
                backgroundColor: "transparent",
            }}
        >
            {playerNumber === 1 ? (
                <div className="player-1-container" style={{gap: roundsNumber === 7 ? "5px" : "10px",}}>
                    <div className="main-character-icon player-1 primary-icon">
                        <img alt="Main Character Icon" src={character.src} />
                    </div>
                    {!isMobile && roundsIconArray} 
                    {/* TODO : ADD NEW WIN / LOSS STATS */}
                </div>
            ) : (
                <div className="player-2-container" style={{gap: roundsNumber === 7 ? "5px" : "10px"}}>
                    {!isMobile && roundsIconArray}
                    <div className="main-character-icon player-2 primary-icon">
                        <img alt="Main Character Icon" src={character.src} />
                    </div>
                </div>
            )}
        </div>
    );}

export default ScoreResult;

