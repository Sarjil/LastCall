import {connect} from 'react-redux'
import CheckinsIndex from './checkin_index'
import {fetchAllCheckins, fetchCheckin, deleteCheckin} from '../../actions/checkin_actions'

const msp = state => ({
    checkins: state.entities.checkins,
    currentUser: state.session.currentUserId
})

const mdp = dispatch => ({
    fetchAllCheckins: () => dispatch(fetchAllCheckins()),
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
})

export default connect(msp,mdp)(CheckinsIndex);