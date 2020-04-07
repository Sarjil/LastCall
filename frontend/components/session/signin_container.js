import {connect} from 'react-redux'
import SignIn from './signin'
import {login} from '../../actions/sessions/session_actions'

const msp = state => ({
    errors: state.errors.session,
    formType: "Sign In"
})

const mdp = dispatch => ({
    action: user => dispatch(login(user))
})

export default connect(msp,mdp)(SignIn); 