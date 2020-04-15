import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchBrewery} from '../../actions/brewery_action'
import BreweryShow from './breweries_show';

const msp = (state,ownProps) => {
    
    return{
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    }
}

const mdp = dispatch => ({
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId))
})

export default withRouter(connect(msp,mdp)(BreweryShow))