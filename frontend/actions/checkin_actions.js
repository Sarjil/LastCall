import * as CheckinApi from '../util/checkin.util'

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_CHECKIN = "REMOVE_CHECKIN";

const receiveAllCheckins = checkins => ({
    type: RECEIVE_ALL_CHECKINS,
    checkins
});

const receiveCheckin = checkin => ({
    type: RECEIVE_CHECKIN,
    checkin
});

const receiveCheckinErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors 
});

const removeCheckin = checkinId => ({
    type: REMOVE_CHECKIN,
    checkinId 
});


export const fetchAllCheckins = () => dispatch => (
    CheckinApi.fetchAllCheckins().then(checkins => dispatch(receiveAllCheckins(checkins)), errors => {
        return dispatch(receiveCheckinErrors(errors))
    })
)

export const fetchCheckin = (checkinId) => dispatch => (
    CheckinApi.fetchAllCheckins(checkinId).then(checkin => dispatch(receiveCheckin(checkin)), errors => {
        return dispatch(receiveCheckinErrors(errors))
    })
)

export const createCheckin = data => dispatch => (
    CheckinApi.createCheckin(data).then( checkin => dispatch(receiveCheckin(checkin)), errors => { 
        return dispatch(receiveCheckinErrors(errors))
    })
)

export const updateCheckin = checkinId => dispatch => (
    CheckinApi.updateCheckin(checkinId).then( checkIn => dispatch(receiveCheckin(checkIn)), errors => {
        return dispatch(receiveCheckinErrors(errors))
    })
)

export const deleteCheckin = checkinId => dispatch => {
    CheckinApi.deleteCheckin(checkinId).then (response => dispatch(removeCheckin(response.checkin.id)), errors =>{
        return dispatch(receiveCheckinErrors(errors))
    })
}