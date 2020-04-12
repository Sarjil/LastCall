import {connect} from 'react-redux';
import BeerIndex from './beer_index'
import { fetchBeers } from '../../actions/beer_actions';
import { fetchBreweries } from '../../actions/brewery_action';


const msp = (state, ownProps) => {
    return {
        beers: state.entities.beers,
        breweries: state.entities.breweries[ownProps.match.params.breweryId]
    };
};

const mdp = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers()),
        fetchBreweries: () => dispatch(fetchBreweries())
    };
};

export default connect(msp,mdp)(BeerIndex)
