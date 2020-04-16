import React from 'react';
import {Link} from 'react-router-dom'

const BeerIndexItem = props => (
     
    <>
        <div className="beer-index-item">

            <div className="show-top">  
                
                <img className="feature-icon beer-img" src={props.beer.imgUrl} />

                <div className="show-item show-info">
                    <Link className="orange-link" to={`beers/${props.beer.id}`}>
                        {props.beer.name}
                    </Link>
                    <p className="show-style index-subitem show-item">Style:{props.beer.style}</p>
                    <p className="show-style index-subitem show-item">{props.beer.abv} ABV</p>
              </div>
            </div>

            <div className="show-bottom">
                <p className="show-decription index-subitem">{props.beer.description}</p>
            </div>

        </div>
    </>
)

export default BeerIndexItem;