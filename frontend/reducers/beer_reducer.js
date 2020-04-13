import {RECEIVE_BEER, RECEIVE_BEERS} from '../actions/beer_actions'
import {RECEIVE_BREWERY} from '../actions/brewery_action'

const beersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_BEERS:
      // return Object.assign({}, oldState, action.beers);
      // debugger
      return action.beers;
    case RECEIVE_BEER:
      // return Object.assign({}, oldState, { [action.beer.id]: action.beer });
      // debugger
      const newBeer = {[action.beer.beer.id]: action.beer.beer}
      return Object.assign({}, oldState, newBeer); 
    // case RECEIVE_BREWERY:
    //   return Object.assign({}, oldState, action.beers);
    default:
      return oldState;
  };
};

export default beersReducer; 