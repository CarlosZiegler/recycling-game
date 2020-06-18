import React from 'react'

import './style.css'

//component Sidebar render image and a score, use a props for onclick function and set a score
function SideBar({ garbage, score, onclickHandler }) {

    return (
        <div className="side-container">
            <p className="description">
                Find the correct destination
                for this garbage:
            </p>
            <img src={garbage?.image} alt="Trash" className="random-image" />
            <h3 className="score"> Score: {`${score}`}</h3>
            <button className="btn-primary btn" onClick={() => onclickHandler()}>Finish</button>
        </div>
    )
}

export default SideBar
