import {connect} from 'react-redux';
import BreweriesIndex from './breweries_index';
import {fetchBreweries} from '../../actions/brewery_action'
import {fetchBeers} from '../../actions/beer_actions'

const msp = state =>({
    breweries: Object.values(state.entities.breweries)
})

const mdp = dispatch  =>({
    fetchBreweries: () => dispatch(fetchBreweries()),
    fetchBeers: () => dispatch(fetchBeers())
})

export default connect(msp,mdp)(BreweriesIndex);
