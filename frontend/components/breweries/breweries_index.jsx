import React from 'react'
import BreweryIndexItems from './breweries_index_items'

class BreweriesIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBreweries(); 
    }

    render(){
        const breweryLis = this.props.breweries.map(brewery => {
            return (<BreweryIndexItems brewery={brewery} key={brewery.name} />)
        });

        return(
            <div className="beer-index">
                <div className="beer-index-title"> Breweries </div>
                <div className="beer-index-body"> 
                    <ul> {breweryLis}</ul>
                 </div>
            </div>
        )
    }


}

export default BreweriesIndex; 