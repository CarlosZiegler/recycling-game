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

    const CARDS = [
        {
            category: 'glas',
            image: cardGreen,
        },
        {
            category: 'werkstoffe',
            image: cardYellow,
        },
        {
            category: 'papier',
            image: cardBlue,
        },
        {
            category: 'biogut',
            image: cardBrown,
        },
        {
            category: 'hausmull',
            image: cardGrey,
        },
    ]

    useEffect(() => {
        setGarbageList(generateArrayAndRandomize(allGarbagesObjects))
        setIsReady(true)
    }, [])

    useEffect(() => {
        selectImageGarbage()
    }, [isReady])

    const selectImageGarbage = () => {

        if (garbageIndex + 1 > garbageList.length - 1) {
            setGarbage(garbageList[0])
            setGarbageIndex(0)
        } else {
            setGarbage(garbageList[garbageIndex])
            setGarbageIndex(garbageIndex + 1)
        }

    }

    const checkAnswer = (category) => {
        if (category === garbage.category) {
            setScoreTrue(scoreTrue + 1)
        }
        setScoreFalse(scoreFalse + 1)
        selectImageGarbage()
    }
    return (
        <div className="container content-center">
            <div className="sidebar">
                <Sidebar garbage={garbage} score={scoreTrue} onclickHandler={selectImageGarbage} />
            </div>
            <div className="card-container">
                {CARDS.map((card, index) => <img key={index} className="card" src={card.image} alt="card-yelow" onClick={() => checkAnswer(card.category)} />)}
            </div>
        </div>
    )
}

export default Game
