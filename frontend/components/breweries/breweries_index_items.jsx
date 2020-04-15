import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../header/header'

const BreweryIndexItems = props =>{
    return(
            <div className="brewery-item">
                <div className="brewery-left">

                <img className="brew-index-img" src={window.breweryIcon} />

                <div className="brewery-show-sect">
                    <Link className="orange-link" to={`breweries/${props.brewery.id}`}>{props.brewery.name}</Link>
                    <p className="beer-description">{props.brewery.location}</p>
                </div>

                </div>

            <div className="brewery-right">
                <div className="brewery-right-items num-beers">
                    <p>{props.brewery.numBeers} Beers</p>
                </div>
            </div>

                
            </div>
       
    );
   
}

export default BreweryIndexItems; 