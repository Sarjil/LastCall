import React from 'react';
import {Link} from 'react-router-dom'

const BeerIndexItem = props => (
     
    <>
        <div className="beer-index-item">
            
            <img className="feature-icon beer-img" src={props.beer.imgUrl} />

            <div className="index-item-beer">
                <Link className="orange-link" to={`beers/${props.beer.id}`}>
                    {props.beer.name}
                </Link>
                {/* Brewery: {props.brewery.name} */}
            </div>

            <p className="beer-style index-subitem">Style:{props.beer.style}</p>
            <p className="beer-abv index-subitem">{props.beer.abv} ABV</p>
            <p className="beer-decription index-subitem">{props.beer.description}</p>

        </div>
    </>
)

export default BeerIndexItem;