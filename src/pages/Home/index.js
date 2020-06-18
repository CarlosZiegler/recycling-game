import React from 'react'
import { Flyers } from '../../data/flyer'


import './styles.css'

function Home() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1 className="title"> Learn about recycling</h1>
                    <p className="description">
                        Do you know how to recycle your garbage? If you already know this congratulations!
                        If you don't know yet, let's learn! Read the brochure and test your knowledge!
                    </p>
                    <div className="flyer-container">
                        {Flyers && Flyers.map(flyer =>
                            <div className="flyer-item-container">
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
