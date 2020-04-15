import {connect} from 'react-redux'
import EditBeerForm from './edit_beer_form'
import {updateBeer, fetchBeer} from '../../actions/beer_actions'
import { fetchBreweries } from '../../actions/brewery_action'
import { deleteSessionErrors } from '../../actions/session_actions'
import {withRouter} from 'react-router-dom'

const msp = (state,ownProps) =>{
    return {
    beer: state.entities.beers[ownProps.match.params.beerId],
    breweries: Object.values(state.entities.breweries)
}
}

const mdp = dispatch => ({
    updateBeer: beer => dispatch(updateBeer(beer)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    fetchBeer: beerId => dispatch(fetchBeer(beerId)),
    deleteSessionErrors: () => dispatch(deleteSessionErrors())
})

export default withRouter(connect(msp,mdp)(EditBeerForm));