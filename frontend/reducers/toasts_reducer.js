import { RECEIVE_CHECKIN } from "../actions/checkin_actions";
import { RECEIVE_TOAST, REMOVE_TOAST, RECEIVE_ALL_TOASTS } from "../actions/toast_actions";
import { RECEIVE_BREWERY } from "../actions/brewery_action";
import { RECEIVE_BEER } from "../actions/beer_actions";

const toastsReducer = (oldState = {}, action) => {
  const newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_CHECKIN:
      return Object.assign({}, oldState, action.payload.toasts);
    case RECEIVE_ALL_TOASTS:
      return action.toasts;
    case RECEIVE_BREWERY:
      return Object.assign({}, oldState, action.payload.toasts);
    case RECEIVE_BEER:
      return Object.assign({}, oldState, action.payload.toasts);
    case RECEIVE_TOAST:
      return Object.assign({}, oldState, { [action.toast.id]: action.toast });
    case REMOVE_TOAST:
      delete newState[action.toast.id];
      return newState;
    default:
      return oldState;
  };
};

export default toastsReducer;