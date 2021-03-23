import React from 'react';

function Card(props) {
    function checkMatched() {
        if(!props.matched) {
            props.notifyPickedNonmatch(props.cardId);
        }
        else {
            props.notifyGameOver();
        }
    }

    return (
        <div className='card' onClick={checkMatched} >
            <img alt="A randomized Lux skin" src={props.imgRef} onLoad={props.notifyImgLoaded}></img>
            <p>{props.skinName}</p>
        </div>
    )
}

export default Card;