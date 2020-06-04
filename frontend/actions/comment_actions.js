import * as CommentAPI from "../util/comment_util";

export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

const receieveCommentErrors = errors => {
  return {
    type: RECEIVE_TOAST_ERRORS,
    errors
  };
};

export const createComment = comment => dispatch => {
  CommentAPI.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(errors => dispatch(receieveCommentErrors(errors)));
};

export const deleteComment = commentId => dispatch => {
  CommentAPI.deleteComment(commentId)
    .then(commentId => dispatch(removeComment(commentId)))
    .catch(errors => dispatch(receieveCommentErrors(errors)));
};