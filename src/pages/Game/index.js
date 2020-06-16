import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'

import Sidebar from '../../components/SideBar'
import Card from '../../components/Card'

import { allGarbagesObjects } from '../../data/allGarbages'
import { CARDS } from '../../data/allCards'
import { generateArrayAndRandomize } from '../../utils/helpers'

import correctAnimationData from '../../assets/clear.json'
import wrongAnimationData from '../../assets/banana-boy.json'

import './style.css'

function Game() {

    const [garbageList, setGarbageList] = useState([])
    const [garbage, setGarbage] = useState()
    const [garbageIndex, setGarbageIndex] = useState(0)
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [scoreTrue, setScoreTrue] = useState(0)
    const [scoreFalse, setScoreFalse] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [isTrue, setIsTrue] = useState(false)


    useEffect(() => {
        setGarbageList(generateArrayAndRandomize(allGarbagesObjects))
        setIsDataLoaded(true)
    }, [])

    useEffect(() => {
        selectImageGarbage()
    }, [isDataLoaded])

    const defaultOptionsCorrectAnswer = {
        loop: true,
        autoplay: true,
        animationData: correctAnimationData,
    };
    const defaultOptionsWrongAnswer = {
        loop: true,
        autoplay: true,
        animationData: wrongAnimationData,
    };


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
            setIsTrue(true)
        } else {
            setIsTrue(false)
        }
        setShowResult(true)
        setScoreFalse(scoreFalse + 1)
        setTimeout(() => {
            setShowResult(false)
            selectImageGarbage()
        }, 2000);

    }
    return (
        <div className="container content-center">
            <div className="sidebar">
                <Sidebar garbage={garbage} score={scoreTrue} onclickHandler={selectImageGarbage} />
            </div>
            <div className="card-container">
                {showResult &&
                    <Lottie className="lottieFile" options={isTrue ? defaultOptionsCorrectAnswer : defaultOptionsWrongAnswer}
                        height={"auto"}
                        width={"700px"}
                    />}

                {!showResult && CARDS.map((card, index) => <Card key={index} card={card} onclickHandler={checkAnswer} />)}

            </div>
        </div>
    )
}

export default Game
