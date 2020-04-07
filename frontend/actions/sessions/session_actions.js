import * as SessionApiUtil from '../../util/session';

import { receiveCurrentUser } from "../../actions/user_actions";
import { receiveErrors } from '../error_actions';

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


export const login = (user) => (dispatch) =>
    SessionApiUtil.login(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    );


export const logout = () => (dispatch) =>
    SessionApiUtil.logout().then(
        () => dispatch(logoutCurrentUser()),
        errors => dispatch(receiveErrors(errors.responseJSON))
    );