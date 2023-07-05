import PropTypes from "prop-types";
import "../css/Header.css";

export default function Header({score, highScore}){
    return (
        <>
        <div className="header-root">
            <header>
                <p className="header-title">Pokemon Memory Game</p>
                <div style={{display:"flex"}}>
                    <p className="score current-score">Score: {score}</p>
                    <p className="score high-score">High Score: {highScore}</p>
                </div>
            </header>
        </div>
        </>
    );
}

Header.propTypes = {
    score: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
}