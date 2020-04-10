import React from 'react';

const Features = () => (
    <div className='features-container'>

        <div className="features-title">Other Great Features</div>
        <div className="orange-spacer"></div>


        <div className="features-images">
            <img className="feature-icon" src={window.beerIcon} />
            <img className="feature-icon" src={window.socializeIcon} />
            <img className="feature-icon" src={window.reviewIcon} />
        </div>
        
        <div className="site-features">

            <div className="site-first-feature feature-item">
            <h3 className="first-feature-title feature-title">DISCOVER</h3>
            <p className="first-feature-body feature-body">Discover a whole new world of beers!</p>
        </div>

            <div className="site-second-feature feature-item ">
            <h3 className="second-feature-title feature-title">SOCIALIZE</h3>
            <p className="second-feature-body feature-body">'Comment' and 'Toast' your friends post!</p>
        </div>

        <div className="site-third-feature feature-item">
            <h3 className="third-feature-title feature-title">REVIEW</h3>
            <p className="third-feature-body feature-body">Share your thoughts and experience!</p>
        </div>


        </div>


    </div>
)

export default Features;