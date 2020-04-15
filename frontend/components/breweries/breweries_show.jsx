import React from 'react'
import {Link} from 'react-router-dom'

class BreweryShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {brewery: undefined}
    }

    componentDidMount(){
        // debugger 
        this.props.fetchBrewery(this.props.match.params.breweryId).
        then(brewery => {
            // debugger
            this.setState({brewery: brewery.brewery.brewery})})
    }

    render(){
        // debugger
        if(this.state.brewery === undefined) return null; 

        const brewery = this.props.brewery;

        return(
            
            <div className="brewery-index-container show-main">

                <div className="show-top">

                    <div className="beer-img">
                        {/* <img className="show-img" src={window.breweryIcon} /> */}
                        <img src={brewery.imgUrl} className="brew-index-img" />
                    </div>

                    <div className="beer-info">
                        <h2 className="show-item show-info">{brewery.name}</h2>
                        <p className="show-style show-item">{brewery.location}</p> 
                        <Link to={`/breweries/${this.props.brewery.id}/beers`} className="num-beers orange-link">{brewery.numBeers} Beers</Link>     
                    </div>


                </div>

                <div className="show-bottom">
                    <p className="show-description">{brewery.description}</p>
                </div>

            </div>
        )
    }
}


export default BreweryShow;