import React from 'react'
import RandomImage from '../../assets/random-images/Random-Image.png'

import './style.css'

function SideBar({ garbage, score, onclickHandler }) {

    return (
        <div className="side-container">
            <p className="description">
                Find the correct destination
                for this garbage:
            </p>
            <img src={garbage?.image} alt="Trash" className="random-image" />
            <h3 className="score"> Score: {`${score}`}</h3>
            <button className="btn-primary btn" onClick={() => onclickHandler()}>Next</button>
        </div>
    )
}

export default SideBar
