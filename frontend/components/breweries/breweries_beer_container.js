import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {fetchBrewery} from '../../actions/brewery_action'
import BreweryBeerIndex from './brewery_beer_index';

const msp = (state,ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beer: state.entities.beers 
})

const mdp = dispatch => ({
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
})

export default withRouter(connect(msp,mdp)(BreweryBeerIndex)); 