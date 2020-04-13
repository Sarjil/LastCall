import {connect} from 'react-redux'
import {fetchBrewery} from '../../actions/brewery_action'
import BreweryShow from './breweries_show';

const msp = (state,ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
})

const mdp = dispatch => ({
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
})

export default connect(msp,mdp)(BreweryShow)