import {connect} from 'react-redux'
import BreweryShow from './breweries_show';
import {fetchBrewery} from '../../actions/brewery_action'
import {withRouter} from 'react-router-dom'

const msp = (state,ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    currentUserId: state.session.currentUserId
})

const mdp = dispatch => ({
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
})

export default withRouter(connect(msp,mdp)(BreweryShow))