import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {fetchBrewery} from '../../actions/brewery_action'
import {fetchBeers} from '../../actions/beer_actions'
import BreweryBeerIndex from './breweries_beer_index';

const msp = (state, ownProps) => {
    return {
        brewery: state.entities.breweries[ownProps.match.params.breweryId],
        beers: state.entities.beers
    };
};

const mdp = dispatch => {
    return {
        fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
    };
};

export default withRouter(connect(msp,mdp)(BreweryBeerIndex)); 