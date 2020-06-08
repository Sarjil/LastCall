import * as CommentAPI from "../util/comment_util";

export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

const receieveCommentErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const createComment = comment => dispatch => {
  return CommentAPI.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)), errors => {
      return dispatch(receieveCommentErrors(errors))
    });
};

export const updateComment = comment => dispatch => {
  return CommentAPI.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)), errors => {
      return dispatch(receieveCommentErrors(errors))
    });
};

export const deleteComment = commentId => dispatch => {
  return CommentAPI.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)), errors => {
      return dispatch(receieveCommentErrors(errors))
    });
};