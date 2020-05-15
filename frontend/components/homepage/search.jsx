import React from 'react'

const Search = () =>(
    <div className="search-bar-container">

        <div className="homepage-search-bar">
            <form className="homepage-search-form">
                <div className="search-icon"> </div>
                <input type="search"  className="search-bar" placeholder="Search for beers, or breweries"/>
                <button type="submit" className="search-btn"> SEARCH </button>
                
            </form>
        </div>

        <div className="ratings-badges">
            <div className="ratings-imgs"></div>
            <div className="ratings-spacer"></div>
            <div className="badges-imgs"></div>
        </div>
        
        <div className="ratings-badges-bold-txt">
            <div className="ratings-spacer3"></div>
            <h1 className="ratings-rate-beer"> CHECK IN AND RATE BEER</h1>
            <div className="ratings-spacer1"></div>
            <h1 className="unlock-badges">DRINK NEW BEERS, UNLOCK BADGES</h1>
        </div>

            <div className="ratings-badges-plain-txt">
                <p className="keep-track">Keep track of what you’ve tried and what you thought of it by</p>
                <div className="ratings-spacer4"></div>
                <p className="expand-palate">Expand your palate by trying new & different beer styles and </p>
            </div>

            <div className="ratings-badges-plain-txt">
                <p>checking in a beer and rating it.</p>
                <div className="ratings-spacer2"></div>
                <p>unlock achievements along the way.</p>
            </div>

    </div>
)

export default Search; 