import React from 'react'
import Lottie from 'react-lottie'

//import data
import { Flyers } from '../../data/flyer'

//import Lottie
import ecoletaData from '../../assets/ecoleta.json'

import './styles.css'

function Home() {

    //config lottie
    const defaultOptionsEcoleta = {
        loop: true,
        autoplay: true,
        animationData: ecoletaData,

    };

    //render view
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1 className="title"> Learn about recycling</h1>
                    <div className="animation">
                        <Lottie options={defaultOptionsEcoleta}
                            height={"auto"}
                            width={"600px"}
                            isClickToPauseDisabled={true}
                        />
                    </div>

                    <p className="description">
                        Do you know how to recycle your garbage? If you already know this congratulations!
                        If you don't know yet, let's learn! Read the brochure and test your knowledge!
                    </p>
                    <div className="flyer-container">
                        {Flyers && Flyers.map((flyer, index) =>
                            <div key={index} className="flyer-item-container">
                                <img className="flyer-header" src={flyer.header} alt="header flyer" />
                                <p className={`flyer-text ${flyer.style}`}>{flyer.text}</p>
                                <img className="flyer-body" src={flyer.body} alt="body flyer" />
                            </div>
                        )}
                    </div>
                    <a className="btn-primary" href="/game">Play Game</a>
                </div>
            </div >
        </>
    )
}

export default Home
