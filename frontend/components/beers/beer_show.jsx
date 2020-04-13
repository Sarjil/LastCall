import React from 'react'
import {Link} from 'react-router-dom'

class BeerShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { beer: {} }
    }

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId)
            .then(beer => this.setState({ beer: beer.beer.beer })); 
    }

    render() {
        
        return(
            <div className= "brewery-index-container show-main">
               
                <div className="show-top">  
                     <img src={this.state.beer.imgUrl} className="show-img"/> 
                      <div className="beer-info"> 

                        <h2 className="show-item show-info">{this.state.beer.name}</h2> 
                        <Link to={`/breweries/${this.state.beer.breweryId}`}>{this.state.beer.breweryName}</Link>
                        <p className="show-style show-item">Style: {this.state.beer.style}</p>
                        <p className="show-style show-item">ABV: {this.state.beer.abv}</p>

                     </div> 

                     <div className="show-bottom">
                        <p className="show-description">{this.state.beer.description}</p> 
                     </div>
                 </div>


            </div>
        )
    }
}

export default BeerShow; 