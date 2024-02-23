import "./WordTile.css";

export default function WordTile({ word, onClick}) {
    //will eventually check group of 4 words
    const handleClick = () => {
        onClick(word);
    }
    return (
        <div className="word-tile">
            <button className="word-button" onClick={handleClick}>
                {word}
            </button>
        </div>
    );
}
