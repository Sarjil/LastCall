import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../header/header'

const BreweryIndexItems = props =>{
    return(
            <div className="brewery-item">
                <div className="brewery-left">
                    <img src={props.brewery.imgUrl} className="brew-index-img"/>
                    <Link to={`breweries/${props.brewery.id}`}>{props.brewery.name}</Link>
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