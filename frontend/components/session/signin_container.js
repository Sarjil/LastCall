import {connect} from 'react-redux'
import SessionForm from './session_form'
import { login, receiveSessionErrors, deleteSessionErrors } from '../../actions/session_actions';

const msp = state => ({
    errors: state.errors.session,
    formType: "Sign In"
})

const mdp = dispatch => ({
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    dispatchErrors: errors => dispatch(receiveSessionErrors(errors)),
    deleteSessionErrors: () => dispatch(deleteSessionErrors()) 
})

export default connect(msp,mdp)(SessionForm); 