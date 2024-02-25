import { useState } from "react";
import { useEffect } from "react";
import WordTile from "./components/WordTile";
import "./App.css";
const YELLOW = "1";
const GREEN = "2";
const BLUE = "3";
const PURPLE = "4";
const HEIGHT = 4;
const WIDTH = 4;

export default function App() {
    const [hasWon, setHasWon] = useState(false);
    const [hasYellow, setHasYellow] = useState(false);
    const [hasGreen, setHasGreen] = useState(false);
    const [hasBlue, setHasBlue] = useState(false);
    const [hasPurple, setHasPurple] = useState(false);
    const [choices, setChoices] = useState([]);
    const words = [
        { word: "Hello", color: YELLOW },
        { word: "Rizz", color: GREEN },
        { word: "asdfa", color: BLUE },
        { word: "CRIZZY", color: PURPLE },
        { word: "JOSEPh", color: YELLOW },
        { word: "KIM", color: GREEN },
        { word: "CHRISTIAN", color: BLUE },
        { word: "WOW", color: PURPLE },
        { word: "EGGERT", color: YELLOW },
        { word: "STAHL", color: GREEN },
        { word: "STREANd", color: BLUE },
        { word: "fasdf", color: PURPLE },
        { word: "yello", color: YELLOW },
        { word: "green", color: GREEN },
        { word: "Blue", color: BLUE },
        { word: "purple", color: PURPLE },
    ]
    const handleClick = (index) => {
        if (choices.length > 4) {
            return;
        }
        if (choices.includes(index)) {
            setChoices(choices.filter((choice) => choice !== index));
            console.log("includes");
            return;
        }
        if (choices.length === 4) {
            return;
        }
        setChoices([...choices, index]);
    }
    const checkCorrect = (choices) => {
        console.log(choices); 
    }

    return (
        <>
            <div className="game">
                <div className="words-box">
                    {[...Array(WIDTH)].map((_, rowIndex) => (
                        <div className="container" key={rowIndex}>
                            {[...Array(HEIGHT)].map((_, colIndex) => (
                                <WordTile
                                    onClick={(index) => {
                                        handleClick(index);
                                    }}
                                    word={words[rowIndex * 4 + colIndex].word}
                                    key={rowIndex * 4 + colIndex}
                                    index={rowIndex * 4 + colIndex}
                                    isClicked={choices.includes(rowIndex * 4 + colIndex)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => checkCorrect(choices)}>Check</button>
        </>
    );
}
