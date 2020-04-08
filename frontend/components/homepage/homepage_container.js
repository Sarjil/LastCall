import {connect} from 'react-redux'
import Homepage from './homepage'
import {login} from '../../actions/session_actions'

const msp = state => ({
    
})

const mdp = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(null,mdp)(Homepage); 