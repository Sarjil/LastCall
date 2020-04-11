import {connect} from 'react-redux';
import { signUp, receiveSessionErrors, deleteSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form'


const msp = state => ({
    errors: state.errors.session,
    formType: "Sign Up"

})

const mdp = dispatch => ({
    processForm: user => dispatch(signUp(user)),
    dispatchErrors: errors => dispatch(receiveSessionErrors(errors)),
    deleteSessionErrors: () => dispatch(deleteSessionErrors()) 
})

export default connect(msp, mdp)(SessionForm)