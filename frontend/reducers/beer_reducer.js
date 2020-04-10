import {RECEIVE_BEER, RECEIVE_BEERS} from '../actions/beer_actions'

const BeerReducer = (oldState, action) =>{
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_BEER:
            return Object.assign({}, oldState, {[action.beer.id]: action.beer})
        case RECEIVE_BEERS:
            return Object.assign({}, oldState, action.beers)
        default:
            return oldState;
    } 
}