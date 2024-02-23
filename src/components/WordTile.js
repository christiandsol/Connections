import "./WordTile.css";
export default function WordTile({ word, onClick, index,isClicked}) {
    //will eventually check group of 4 words
    const handleClick = () => {
        onClick(index);
    }
    return (
        <div className="word-tile">
            <button className={"word-button " + ((isClicked) ? "clicked" : "")} onClick={handleClick}>
                {word}
            </button>
        </div>
    );
}
