import {connect} from 'react-redux'
import CheckinsIndex from './checkin_index'
import {fetchAllCheckins, fetchCheckin, deleteCheckin} from '../../actions/checkin_actions'
import { fetchBeers } from '../../actions/beer_actions'
import { fetchBreweries } from '../../actions/brewery_action'

const msp = state => ({
    checkins: state.entities.checkins,
    currentUser: state.session.currentUserId,
    breweries: Object.values(state.entities.breweries),
    beers: Object.values(state.entities.beers)
})

const mdp = dispatch => ({
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchAllBreweries: () => dispatch(fetchBreweries()),
    fetchAllBeers: () =>  dispatch(fetchBeers())
})

export default connect(msp,mdp)(CheckinsIndex);