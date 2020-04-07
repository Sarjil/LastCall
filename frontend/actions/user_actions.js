import * as UserApiUtil from '../util/user_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const signup = (user) => (dispatch) =>
    UserApiUtil.signup(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        );

export const fetchUser = (userId) => (dispatch) =>
    UserApiUtil.fetchUser(userId)
        .then((user) => dispatch(receiveCurrentUser(user))
        );

export const updateUser = (user) => (dispatch) =>
    UserApiUtil.updateUser(user)
        .then((user) => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        );
