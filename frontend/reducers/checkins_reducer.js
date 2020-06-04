import {RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN} from '../actions/checkin_actions';
import {RECEIVE_BREWERY} from '../actions/brewery_action';
import {RECEIVE_BEER} from '../actions/beer_actions';
import {RECEIVE_USER} from '../actions/user_actions'

const checkinsReducer = (oldState={}, action)=>{
    Object.freeze(oldState); 
    let nextState = Object.assign({}, oldState);

    switch(action.type){
        case RECEIVE_ALL_CHECKINS:
            return Object.assign({}, oldState, action.checkins)
        case RECEIVE_CHECKIN:
            return Object.assign({}, oldState, {[action.payload.checkin.id]: action.payload.checkin})
        case REMOVE_CHECKIN:
            delete nextState[action.checkinId.id];
            return nextState;
        case RECEIVE_USER:
            return action.payload.user || {};
        default: 
            return oldState;
    }
}

export default checkinsReducer;