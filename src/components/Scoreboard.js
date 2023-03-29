import React from "react";

const Scoreboard = (props) => {
    const { currScore, highScore } = props;

    return (
        <div className="scoreboardDiv">
            <p>Current Score: {currScore} </p>
            <p>High Score: {highScore}</p>
        </div>
    )
}

export default Scoreboard;