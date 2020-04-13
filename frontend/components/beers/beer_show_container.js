import {connect} from 'react-redux'
import {fetchBeer} from '../../actions/beer_actions'
import BeerShow from './beer_show'

const msp = (state,ownProps) => {
    debugger 
    return({
    beer: state.entities.beers[ownProps.match.params.beerId]
    // brewery: state.entities.breweries[ownProps.match.params.breweryId], maybe need later?
    })
}

const mdp = dispatch => ({
    fetchBeer: beerId => dispatch(fetchBeer(beerId))
})

export default connect(msp,mdp)(BeerShow);
