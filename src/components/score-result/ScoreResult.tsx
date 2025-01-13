import * as React from "react";
import { Avatar } from "@mui/joy";
import { motion } from "framer-motion";
import  {CharacterIcon, USF4Character,characterIcons} from "./USF4Character";
import vsIcon from "../../assets/characters-icon/vs-icon.png"
import "./score-result.css";

type PlayerNumbers = 1 | 2
type PossibleRounds = 1 | 3 | 5 | 7;

interface PlayerScore {
    playerNumber: PlayerNumbers
    roundsNumber: PossibleRounds
    roundsWon: number
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
        roundsWon: props.roundsWon
    }

    const player2Score: PlayerScore = {
        playerNumber: 2,
        roundsNumber: props.roundsSetting,
        character: p2Character,
        hasWon: props.matchWon,
        roundsWon: props.roundsWon
    }
    
    return (
        <div className="score-result-container">
    
        <PlayerScore playerScore={player1Score}></PlayerScore>
        <div className="versus-icon">
                <img 
                    alt="Versus Icon" 
                    src={vsIcon} // Update the path for round icon as needed
                />
                </div>
        <PlayerScore playerScore={player1Score}></PlayerScore>

        </div>
    );
};

const PlayerScore = (props: any) => {
    const playerScore = props.playerScore
    const playerNumber: number = playerScore.playerNumber;
    const roundsNumber: PossibleRounds = playerScore.roundsNumber;
    const roundsWon: number = playerScore.roundsWon
    const roundsIconArray = [];
    const character = playerScore.character;

    for (let i = 0; i < (roundsNumber + 1) / 2; i++) {
        roundsIconArray.push(
            <div className="round-icon">
                <img
                    key={i}
                    alt="Round Icon"
                    src={character.src} // Update the path for round icon as needed
                />
            </div>
        );
    }

    return (
        <div className="score-result-container" style={{marginTop: "25px",backgroundColor: undefined}}>
            {playerNumber === 1 ? (
                <>
                    <div className="main-character-icon">
                        <img
                            alt="Main Character Icon"
                                src={character.src}
                        />
                    </div>
                    {roundsIconArray}
                </>
            ) : (
                <>
                    {roundsIconArray}
                    <div className="main-character-icon">
                        <img
                            alt="Main Character Icon"
                            src={character.src}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ScoreResult;

