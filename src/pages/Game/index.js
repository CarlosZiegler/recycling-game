import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/SideBar'

import cardYellow from '../../assets/yellow.png'
import cardBlue from '../../assets/blue.jpg'
import cardBrown from '../../assets/brown.png'
import cardGrey from '../../assets/grey.png'
import cardGreen from '../../assets/green.png'

import './style.css'

function Game() {
    return (
        <div className="container content-center">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="card-container">
                <img className="card" src={cardYellow} alt="card-yelow" />
                <img className="card" src={cardBlue} alt="card-yelow" />
                <img className="card" src={cardBrown} alt="card-yelow" />
                <img className="card" src={cardGrey} alt="card-yelow" />
                <img className="card" src={cardGreen} alt="card-yelow" />
            </div>

        </div>
    )
}

export default Game
