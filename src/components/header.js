import React from "react";

function Header(props) {
    return (
        <div id="header">
            <h1>Lux Memory Card Game</h1>
            <h2>Try to click on all skins exactly once!</h2>
            <div id="scoreboard"><p>Current: {props.currentScore}</p><p>High: {props.highScore}</p></div>
        </div>
    )
}

export default Header;