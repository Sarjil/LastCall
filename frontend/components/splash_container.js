import {connect} from 'react-redux'
import Splash from './splash'
import {logout} from '../actions/sessions/session_actions'

const msp = state => ({
    user: state.entities.user[state.session.id]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp,mdp)(Splash); 