import React from 'react'
import {Link} from 'react-router-dom'

class BeerShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     beer: {}
        // }
    }

    componentDidMount() {
        this.props.fetchBeer(this.props.match.params.beerId)
            .then(beerAction => this.setState({ beer: beerAction.beer }));
    }

    render() {
        const beer = this.props.beer;
        debugger 
        return(

            <div className= "beer-index-container show-main">
                <div className="show-top">
                    {/* <img src={beer.imgUrl} className="show-img"/> */}
                    <div className="beer=info">
                        <h2 className="show-item show-info">{beer.name}</h2>
                        <p className="show-style show-item">{beer.brewery}</p>
                        <p className="show-style show-item">{beer.style}</p>
                        <p className="show-style show-item">{beer.abv}</p>
                        <p className="show-style show-item">{beer.description}</p>
                        <Link to={`/breweries/${beer.brewery.id}`}>{beer.brewery}</Link>

                    </div>
                </div>


            </div>
        )
    }
}

export default BeerShow; 