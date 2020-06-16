import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/SideBar'

import cardYellow from '../../assets/yellow.png'
import cardBlue from '../../assets/blue.jpg'
import cardBrown from '../../assets/brown.png'
import cardGrey from '../../assets/grey.png'
import cardGreen from '../../assets/green.png'

import { allGarbagesObjects } from '../../data/allGarbages'
import { generateArrayAndRandomize } from '../../utils/helpers'



import './style.css'

function Game() {

    const [garbageList, setGarbageList] = useState([])
    const [garbage, setGarbage] = useState()
    const [garbageIndex, setGarbageIndex] = useState(0)
    const [isReady, setIsReady] = useState(false)
    const [scoreTrue, setScoreTrue] = useState(0)
    const [scoreFalse, setScoreFalse] = useState(0)

    useEffect(() => {
        setGarbageList(generateArrayAndRandomize(allGarbagesObjects))
        setIsReady(true)
    }, [])

    useEffect(() => {
        selectImageGarbage()
    }, [isReady])

    const selectImageGarbage = () => {
        setGarbage(garbageList[garbageIndex])
        setGarbageIndex(garbageIndex + 1)
    }
    return (
        <div className="container content-center">
            <div className="sidebar">
                <Sidebar garbage={garbage} score={scoreTrue} onclickHandler={selectImageGarbage} />
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
