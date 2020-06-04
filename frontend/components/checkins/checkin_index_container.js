import {connect} from 'react-redux'
import CheckinsIndex from './checkin_index'
import {fetchAllCheckins, fetchCheckin, deleteCheckin} from '../../actions/checkin_actions'
import { fetchBeers } from '../../actions/beer_actions'
import { fetchBreweries } from '../../actions/brewery_action'
import {fetchAllToasts, createToast, deleteToast} from '../../actions/toast_actions'

const msp = state => ({
    checkins: state.entities.checkins,
    currentUserId: state.session.currentUserId,
    breweries: Object.values(state.entities.breweries),
    beers: Object.values(state.entities.beers),
    toasts: state.entities.toasts
})

const mdp = dispatch => ({
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    fetchAllBreweries: () => dispatch(fetchBreweries()),
    fetchAllBeers: () =>  dispatch(fetchBeers()),
    fetchAllToasts: () => dispatch(fetchAllToasts()),
    createToast: toast => dispatch(createToast(toast)),
    deleteToast: toastId => dispatch(deleteToast(toastId))
})

export default connect(msp,mdp)(CheckinsIndex);