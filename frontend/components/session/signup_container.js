import {connect} from 'react-redux';
import {signup} from '../../actions/user_actions';
import SignUp from './signup'


const msp = state => ({
    errors: state.errors.session,
    formType: "Sign Up"

})

const mdp = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SignUp)