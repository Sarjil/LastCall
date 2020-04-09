import React from 'react'

const Search = () =>(
    <div >

        <div className="homepage-search-bar">
            <form className="homepage-search-form">
                <div className="search-icon"> </div>
                <input type="search" placeholder="Search for beers, or breweries"/>
                <button type="submit" className="search-btn"> SEARCH </button>
                
            </form>
        </div>

        <div className="ratings-badges">
            <div className="ratings-imgs"></div>
            <div className="badges-imgs"></div>
        </div>
        
        <div className="ratings-badges-bold-txt">
            <h1 className="ratings-rate-beer"> CHECK IN AND RATE BEER</h1>
            <h1 className="unlock-badges">DRINK NEW BEERS, UNLOCK BADGES</h1>
        </div>

            <div className="ratings-badges-plain-txt">
                <p className="keep-track">Keep track of what you’ve tried and what you thought of it by</p>
                <p className="expand-palate">Expand your palate by trying new & different beer styles and </p>
            </div>

            <div className="ratings-badges-plain-txt">
                <p>checking in a beer and rating it.</p>
                <p>unlock achievements along the way.</p>
            </div>

    </div>
)

export default Search; 