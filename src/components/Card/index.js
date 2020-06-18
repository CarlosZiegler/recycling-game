import React from 'react'

//component Card render a Card image and use a props for onclick function
function Card({ card, onclickHandler }) {
    return (
        <img className="card" src={card?.image} alt="my Card" onClick={() => onclickHandler(card?.category)} />)
}

export default Card
