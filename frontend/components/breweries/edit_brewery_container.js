import { connect } from 'react-redux'
import EditBreweryForm from './edit_brewery'
import { fetchBrewery, updateBrewery } from '../../actions/brewery_action'
import { deleteSessionErrors } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    return {
        brewery: state.entities.breweries[ownProps.match.params.breweryId],
        
    }
}

const mdp = dispatch => ({
    updateBrewery: brewery => dispatch(updateBrewery(brewery)),
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
})

export default withRouter(connect(msp, mdp)(EditBreweryForm));