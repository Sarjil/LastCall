import {RECEIVE_BREWERIES, RECEIVE_BREWERY} from '../actions/brewery_action'

const breweriesReducer = (state = {}, action) =>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_BREWERY:
            return Object.assign({}, state, {[action.brewery.id]: brewery})
        case RECEIVE_BREWERIES:
            return Object.assign({}, state, action.breweries)
        default:
            return state;
    }

}

export default breweriesReducer; 