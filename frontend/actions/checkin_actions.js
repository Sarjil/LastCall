import * as CheckinApi from '../util/checkin_util'

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_CHECKIN_ERRORS = "RECEIVE_CHECKIN_ERRORS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const REMOVE_CHECKIN = "REMOVE_CHECKIN";

const receiveAllCheckins = checkins => {
    return {
        type: RECEIVE_ALL_CHECKINS,
        checkins
    };
};

const receiveCheckin = payload => {
    return {
        type: RECEIVE_CHECKIN,
        payload
    };
};

const receiveCheckinErrors = errors => {
    return {
        type: RECEIVE_CHECKIN_ERRORS,
        errors
    };
};

const removeCheckin = checkinId => {
    return {
        type: REMOVE_CHECKIN,
        checkinId
    };
};

export const fetchAllCheckins = () => dispatch => {
    return CheckinApi.fetchAllCheckins()
        .then(checkins => dispatch(receiveAllCheckins(checkins)), errors => {
            return dispatch(receiveCheckinErrors(errors))
        });
};

export const fetchCheckin = checkinId => dispatch => {
    return CheckinApi.fetchCheckin(checkinId)
        .then(payload => dispatch(receiveCheckin(payload)), errors => {
            return dispatch(receiveCheckinErrors(errors))
        });
};

export const createCheckin = formData => dispatch => {
    return CheckinApi.createCheckin(formData)
        .then(checkin => dispatch(receiveCheckin(checkin)), errors => {
            return dispatch(receiveCheckinErrors(errors))
        });
};

export const updateCheckin = checkin => dispatch => {
    return CheckinApi.updateCheckin(checkin)
        .then(checkin => dispatch(receiveCheckin(checkin)), errors => {
            return dispatch(receiveCheckinErrors(errors))
        });
};

export const deleteCheckin = checkinId => dispatch => {
    return CheckinApi.deleteCheckin(checkinId)
        .then(checkinId => dispatch(removeCheckin(checkinId)), errors => {
            return dispatch(receiveCheckinErrors(errors))
        });
};

