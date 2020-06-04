import { RECEIVE_CHECKIN } from "../actions/checkin_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (oldState = {}, action) => {
  const newState = Object.assign({}, oldState);
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_CHECKIN:
      return action.payload.comments || oldState;
    case RECEIVE_COMMENT:
      return Object.assign({}, oldState, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    default:
      return oldState;
  };
};

export default commentsReducer;