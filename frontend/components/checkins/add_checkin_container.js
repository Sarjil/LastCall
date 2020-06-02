import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBreweries } from '../../actions/brewery_action'
import {fetchBeers} from '../../actions/beer_actions'
import AddCheckinForm from './add_checkin_form'
import { createCheckin, updateCheckin, deleteCheckin } from '../../actions/checkin_actions'

const msp = state => {
    // debugger 
    return {
        breweries: Object.values(state.entities.breweries),
        beers: state.entities.beers,
        currentUser: state.session.currentUserId
    }
}

const mdp = dispatch => ({
    createCheckin: checkin => dispatch(createCheckin(checkin)),
    updateCheckin: checkinId => dispatch(updateCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    fetchBeers: () => dispatch(fetchBeers())
})

export default withRouter(connect(msp, mdp)(AddCheckinForm));