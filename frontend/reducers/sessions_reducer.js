import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/sessions/session_actions";

export const sessionReducer = (oldState = null, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return {currentUserId: action.user.id}
        case LOGOUT_CURRENT_USER:
            return {currentUserId: null}
        default:
            return oldState;
    }
}

export default sessionReducer; 