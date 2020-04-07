import * as SessionUtil from '../../util/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CUURENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const createUser = (user) => dispatch => (
    SessionUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
);

export const loginUser = (user) => dispatch => (
    SessionUtil.login(user).then(user => dispatch(receiveCurrentUser(user))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
);

export const logoutUser = () => dispatch => (
    SessionUtil.logout().then(() => dispatch(logoutCurrentUser())),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
);