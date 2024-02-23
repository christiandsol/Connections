import "./WordTile.css";
import { useState } from "react";
export default function WordTile({ word, onClick }) {
    //will eventually check group of 4 words
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        onClick(word);
        setClicked(!clicked);
    }
    return (
        <div className="word-tile">
            <button className= {"word-button "+ (clicked ? "clicked": "")} onClick={handleClick}>
                {word}
            </button>
        </div>
    );
}
