import React from 'react'
import BeerIndexItem from '../beers/beer_index_item'

class BreweryBeerIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={ brewery:{}, beers:{}}
    }

    componentDidMount(){
        this.props.fetchBrewery(this.props.match.params.breweryId).
        then((action) => { 
            // debugger 
            this.setState({brewery: action.brewery.brewery, beers: action.brewery.beers})
        });
        // this.props.fetchBeer().then( ()=> this.setState({beers}))
        
    }

    render(){
        // debugger 
        
        
        if(Object.keys(this.state.beers).length ===  0) return null;
        let beers = this.state.brewery.beerIds.map( id => {
            let beer = this.state.beers[id];
            return <BeerIndexItem beer={beer} key={beer.id} /> 
        });
    

    return (
        <div className="index-feed">
            <div className="index-title">Beers</div>
            <div className="index-body">
                <ul>{beers}</ul>
            </div>
        </div>
    )

    }
}

export default BreweryBeerIndex; 