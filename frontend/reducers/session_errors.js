import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, DELETE_SESSION_ERRORS } from '../actions/session_actions'

const sessionErrors = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case DELETE_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrors;