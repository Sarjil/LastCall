import {connect} from 'react-redux';
import {createUser} from '../../actions/sessions/session_actions';
import SignUp from './signup'


const msp = state => ({
    errors: state.errors.session

})

const mdp = dispatch => ({
    createUser: user => dispatch(createUser(user))
})

export default connect(msp, mdp)(SignUp)