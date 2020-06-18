/* eslint-disable react-hooks/exhaustive-deps */
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
import loserData from '../../assets/alert.json'

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
    const [gameIsRunning, setGameIsRunning] = useState(true)



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
        animationData: loserData,
    };

    useEffect(() => {
        setGarbageList(generateArrayAndRandomize(allGarbagesObjects))
        setIsDataLoaded(true)
    }, [])

    useEffect(() => {
        selectImageGarbage()
    }, [isDataLoaded])


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
            topFunction()
        }, 2000);
    }

    const endGame = () => {
        setGameIsRunning(false)
    }

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
                            width={"600px"}
                            isClickToPauseDisabled={true}
                        />}

                    {!showResult &&
                        CARDS.map((card, index) =>
                            <Card key={index} card={card} onclickHandler={checkAnswer} />
                        )
                    }

                </div>
            </>
                : <div className="result-container">
                    <h1 className="title">RESULT</h1>
                    <div className="result-content">
                        <img src={imageEndGame} className="result-image" alt="endgame" />
                        <div className="result-counters">
                            <h3 className="counter correct-counter">Correct: {scoreTrue}</h3>
                            <h3 className="counter wrong-counter">Wrong: {scoreFalse}</h3>
                            {scoreTrue > scoreFalse
                                ? <p className="result-text green">Perfect, your learning a lot</p>
                                : <p className="result-text red">You made a lot of mistakes, try again!</p>

                            }
                            <Lottie className="lottieFile" options={scoreTrue > scoreFalse
                                ? defaultOptionsSucessResult
                                : defaultOptionsLosenResult}
                                height={"auto"}
                                width={"250px"}
                                isClickToPauseDisabled={true}
                            />

                        </div>
                    </div>
                    <a className="btn-primary" href="/">Go to home</a>
                </div>
            }
        </div>
    )
}

export default Game
