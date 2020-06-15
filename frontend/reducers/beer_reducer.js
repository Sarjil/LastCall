import {RECEIVE_BEER, RECEIVE_BEERS} from '../actions/beer_actions'
import {RECEIVE_BREWERY} from '../actions/brewery_action'

const beersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BEERS:
      return action.beers;
    case RECEIVE_BEER:
      const newBeer = {[action.beer.beer.id]: action.beer.beer}
      return Object.assign({}, oldState, newBeer);
    default:
      return oldState;
  };
};

export default beersReducer; 