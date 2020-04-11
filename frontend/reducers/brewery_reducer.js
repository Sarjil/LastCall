import {RECEIVE_BREWERIES, RECEIVE_BREWERY} from '../actions/brewery_action'
import {RECEIVE_BEER} from '../actions/beer_actions'

const breweriesReducer = (state = {}, action) =>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_BREWERY:
            return Object.assign({}, state, {[action.brewery.id]: action.payload.brewery})
        case RECEIVE_BREWERIES:
            return Object.assign({}, state, action.breweries)
        case RECEIVE_BEER:
            return Object.assign({}, state, {[action.payload.brewery.id]:action.payload.brewery })
        default:
            return state;
    }

}

export default breweriesReducer; 