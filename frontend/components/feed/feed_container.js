import {connect} from 'react-redux'
import Feed from './feed'
import {logout} from '../../actions/session_actions'

const msp = state => ({
    user: state.entities.users[state.session.currentUserId]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp,mdp)(Feed);