import React from 'react'
import {Link} from 'react-router-dom'

class BreweryShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBrewery(this.props.match.params.breweryId)
    }

    render(){
        const brewery = this.props.brewery;

        return(
            
            <div className="brewery-index-container show-main">
                <div className="show-top">
                    <img className="show-img" src={brewery.imgUrl}/>
                    <div className="beer-info">
                        <h2 className="show-item show-info">{brewery.name}</h2>
                        <p className="show-style show-item">{brewery.location}</p> 
                        <Link to={`/breweries/${this.props.brewery.id}/beers`} className="num-beers">{brewery.numBeers} Beers</Link>     
                    </div>

                    <div className="show-bottom">
                        <p className="show-description">{brewery.description}</p>
                    </div>

                </div>


            </div>
        )
    }
}


export default BreweryShow;