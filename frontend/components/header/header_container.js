import {connect} from 'react-redux'
import Header from './header'
import {logout} from '../../actions/session_actions'

const msp = state => ({
    currentUser: state.session.currentUserId,
    user: state.entities.users[state.session.currentUserId]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()) 
})

export default connect(msp,mdp)(Header);