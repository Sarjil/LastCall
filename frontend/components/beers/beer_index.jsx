import React from 'react';
import {Link} from 'react-router-dom'
import BeerIndexItem from './beer_index_item'

class BeerIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBeers();
        this.props.fetchBreweries();
    }

    render(){
        const beerLis = this.props.beers; 
        // const breweryName = this.props.brewery.name; 
        const allBeers = Object.values(beerLis).map(beer => {
            return <BeerIndexItem beer={beer} key={beer.name} /> 
        })
        return(
            <div className="beer-index">
                <div className="beer-index-title">Beers</div>
                <div className="beer-index-body">
                    <ul> {allBeers} </ul>
                </div>
            </div>
        )
    }
}

export default BeerIndex;