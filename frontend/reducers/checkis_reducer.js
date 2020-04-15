import {RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN} from '../actions/brewery_action'

const checkinsReducer = (oldState={}, action)=>{
    Object.freeze(state); 

    switch(action.type){
        case RECEIVE_ALL_CHECKINS:
            return Object.assign({}, oldState, action.checkins)
        case RECEIVE_CHECKIN:
            return Object.assign({}, oldState, {[action.id]: action.checkin})


        default: 
            return oldState;
    }
}

exp