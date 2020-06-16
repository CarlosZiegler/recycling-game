import React from 'react'

function Card({ card, onclickHandler }) {
    return (
        <img className="card" src={card?.image} alt="my Card" onClick={() => onclickHandler(card?.category)} />)
}

export default Card
