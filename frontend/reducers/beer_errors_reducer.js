import {RECEIVE_BEER_ERRORS} from '../actions/beer_actions'
import {DELETE_SESSION_ERRORS} from '../actions/session_actions'

const beerErrorReducer = (oldState = {}, action) =>{
    Object.freeze(oldState)
    switch(action.type){
    case RECEIVE_BEER_ERRORS:
        return action.errors;
    case DELETE_SESSION_ERRORS:
        return []; 
    default:
        return oldState;
    }
}

export default beerErrorReducer;