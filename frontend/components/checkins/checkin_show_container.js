import {connect} from 'react-redux';
import CheckinShow from './checkin_show'
import {fetchCheckin, deleteCheckin} from '../../actions/checkin_actions'
import {createToast, deleteToast} from '../../actions/toast_actions'

const msp = (state,ownProps) =>({
    checkin: state.entities.checkins[ownProps.match.params.checkinId],
    currentUserId: state.session.currentUserId,
    toasts: state.entities.toast
})

const mdp = dispatch => ({
    fetchCheckin: checkinId => dispatch(fetchCheckin(checkinId)),
    deleteCheckin: checkinId => dispatch(deleteCheckin(checkinId)),
    createToast: toast => dispatch(createToast(toast)),
    deleteToast: toastId => dispatch(deleteToast(toastId))
})

export default connect(msp,mdp)(CheckinShow);