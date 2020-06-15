import React from 'react'
import FlyerImage from 'assets/flyer.png'

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
                    <img className="flyer" src={FlyerImage} alt="flyer-base" />
                    <a className="btn-primary" href="/game">Play Game</a>
                </div>
            </div >
        </>
    )
}

export default Home
