import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { createBrewery, fetchBrewery } from '../../actions/brewery_action'
import { deleteSessionErrors } from '../../actions/session_actions'
import AddBreweryForm from './add_brewery_form'

const msp = state => ({
    breweries: Object.values(state.entities.breweries),
    errors: state.errors.beer
})

const mdp = dispatch => ({
    createBrewery: brewery => dispatch(createBrewery(brewery)),
    deleteSessionErrors: () => dispatch(deleteSessionErrors()),
})

export default withRouter(connect(msp, mdp)(AddBreweryForm)); 