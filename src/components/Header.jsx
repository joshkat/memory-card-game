import PropTypes from "prop-types";

export default function Header({score, highScore}){
    return (
        <>
        <header>
            <img src="" alt="logo" />
            <span>Score: {score}</span>
            <span>High Score: {highScore}</span>
        </header>
        </>
    );
}

Header.propTypes = {
    score: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
}