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
            <div className= "brewery-index-container show-main beer-form-outer">
               
                <div className="show-top">  

                    <img className="feature-icon beer-img" src={ this.state.beer.imgUrl } />

                      <div className="beer-info">
                        <h2 className="show-item show-info">{this.state.beer.name}</h2> 
                        <Link className="orange-link" to={`/breweries/${this.state.beer.breweryId}`}>{this.state.beer.breweryName}</Link>
                        <p className="show-style show-item">Style: {this.state.beer.style}</p>
                        <p className="show-style show-item">ABV: {this.state.beer.abv}</p>

                       </div> 


               </div>
                
                
                 <div className="show-bottom">
                    <p className="show-description">{this.state.beer.description}</p> 
                    <Link className=" orange-link" to={`/beers/${this.state.beer.id}/edit`}> 
                        <img className="edit-button orange-link" src={window.editIcon} /> 
                    </Link>
                 </div>

            </div>
        )
    }
}

export default BeerShow; 