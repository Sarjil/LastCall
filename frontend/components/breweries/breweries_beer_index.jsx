import React from 'react'
import BeerIndexItem from '../beers/beer_index_item'

class BreweryBeerIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={ brewery:{}}
    }

    componentDidMount(){
        this.props.fetchBrewery(this.props.params.breweryId).
        then((action) => { this.setState({brewery: action.brewery})
        });
        this.props.fetchBeer().then( ()=> this.setState({beers}))
        
    }

    render(){
        debugger 
        let beers = this.props.brewery.beer_ids.map( id => {
            let beer = this.props.beer[id];
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