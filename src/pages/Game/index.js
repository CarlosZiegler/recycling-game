import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'

import Sidebar from '../../components/SideBar'
import Card from '../../components/Card'

import { allGarbagesObjects } from '../../data/allGarbages'
import { CARDS } from '../../data/allCards'
import { generateArrayAndRandomize } from '../../utils/helpers'

import correctAnimationData from '../../assets/clear.json'
import wrongAnimationData from '../../assets/banana-boy.json'
import sucessData from '../../assets/success.json'
import losenData from '../../assets/alert.json'

import imageEndGame from '../../assets/image-endgame.png'

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
    const [gameIsRunning, setgameIsRunning] = useState(true)


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
    const defaultOptionsSucessResult = {
        loop: true,
        autoplay: true,
        animationData: sucessData,
    };
    const defaultOptionsLosenResult = {
        loop: true,
        autoplay: true,
        animationData: losenData,
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
            setScoreFalse(scoreFalse + 1)
        }
        setShowResult(true)
        setTimeout(() => {
            selectImageGarbage()
            setShowResult(false)
        }, 2000);

    }

    const endGame = () => {
        setgameIsRunning(false)
    }

    return (
        <div className="container content-center">
            {gameIsRunning ? <>
                <div className="sidebar">
                    <Sidebar garbage={garbage} score={scoreTrue} onclickHandler={endGame} />
                </div>

                <div className="card-container">
                    {showResult &&
                        <Lottie className="lottieFile" options={isTrue ? defaultOptionsCorrectAnswer : defaultOptionsWrongAnswer}
                            height={"auto"}
                            width={"700px"}
                        />}

                    {!showResult &&
                        CARDS.map((card, index) =>
                            <Card key={index} card={card} onclickHandler={checkAnswer} />
                        )
                    }

                </div>
            </>
                : <div className="result-container">
                    <h1 className="title">Result</h1>
                    <div className="result-content">
                        <img src={imageEndGame} className="result-image" alt="endgame" />
                        <div className="result-counters">
                            <h3 className="counter correct-counter">Correct: {scoreTrue}</h3>
                            <h3 className="counter wrong-counter">Wrong: {scoreFalse}</h3>
                            <Lottie className="lottieFile" options={scoreTrue > scoreFalse
                                ? defaultOptionsSucessResult
                                : defaultOptionsLosenResult}
                                height={"auto"}
                                width={"250px"}
                            />
                        </div>
                    </div>
                    <a className="btn-primary" href="/game">Go to home</a>
                </div>
            }


        </div>
    )
}

export default Game
