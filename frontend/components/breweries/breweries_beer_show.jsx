import React from 'react';
import BreweryShowContainer from './breweries_show_container'
import BreweryBeerContainer from './breweries_beer_container'


const BreweriesBeerShow = () => {
    return (
        <div className="brewery-beer-index">
            <BreweryShowContainer />
            <BreweryBeerContainer />
        </div>
    )
}

export default BreweriesBeerShow; Brewerie