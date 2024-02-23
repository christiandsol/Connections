import { useState } from "react";
import WordTile from "./components/WordTile";
import "./App.css";
const YELLOW = "1";
const GREEN = "2";
const BLUE = "3";
const PURPLE = "4";

const choices = [];
export default function App() {
    const [hasWon, setHasWon] = useState(false);
    const [hasYellow, setHasYellow] = useState(false);
    const [hasGreen, setHasGreen] = useState(false);
    const [hasBlue, setHasBlue] = useState(false);
    const [hasPurple, setHasPurple] = useState(false);

    const words = {
        "Hello": YELLOW,
        "Rizz": GREEN,
        "asdfa": BLUE,
        "CRIZZY": PURPLE,
        "JOSEPh": YELLOW,
        "KIM": GREEN,
        "CHRISTIAN": BLUE,
        "WOW": PURPLE,
        "EGGERT": YELLOW,
        "STAHL": GREEN,
        "STREANd": BLUE,
        "fasdf": PURPLE,
        "yello": YELLOW,
        "green": GREEN,
        "Blue": BLUE,
        "purple": PURPLE,
    }
    const inDisplay = {}

    const getRandomEntry = (obj) => {
        const keys = Object.keys(obj);

        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        if (randomKey in inDisplay) {
            return getRandomEntry(obj);
        }
        inDisplay[randomKey] = true;
        console.log(randomKey);
        return randomKey;
    }

    const handleClick = (word) => {
        if (choices.length >= 4) {
            return;
        }
        if (choices.includes(word)) {
            choices.splice(choices.indexOf(word), 1);
            return;
        }
        choices.push(word);
        console.log(choices);
    }
    const checkCorrect = (choices) => {
        console.log(choices);
        if (choices.length != 4) {
            return;
        }
        if (words[choices[0]] === words[choices[1]] && words[choices[1]] === words[choices[2]]
            && words[choices[2]] === words[choices[3]]) {
            if (words[choices[0]] === YELLOW) {
                setHasYellow(true);
            } if (words[choices[0]] === GREEN) {
                setHasGreen(true);
            } if (words[choices[0]] === BLUE) {
                setHasBlue(true);
            } if (words[choices[0]] === PURPLE) {
                setHasPurple(true);
            }
            return;
        }
    }
    return (
        <>
            <div className="game">
                <div className="words-box">
                    <div className="container">
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={0} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={1} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={2} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={3} />

                    </div>

                    <div className="container">
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={4} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={5} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={6} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={7} />
                    </div>
                    <div className="container">
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={8} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={9} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={10} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={11} />
                    </div>
                    <div className="container">
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={12} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={13} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={14} />
                        <WordTile onClick={(word) => {
                            handleClick(word);
                        }} word={getRandomEntry(words)} key={15} />
                    </div>
                </div>
            </div >
            <button onClick={() => checkCorrect(choices)}>Submit</button>
        </>
    );
}
