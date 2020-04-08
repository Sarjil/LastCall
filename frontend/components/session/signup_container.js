import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import SessionForm from './session_form'


const msp = state => ({
    errors: state.errors.session,
    formType: "Sign Up"

})

const mdp = dispatch => ({
    processForm: user => dispatch(signUp(user))
})

export default connect(msp, mdp)(SessionForm)