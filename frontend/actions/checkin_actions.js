import * as CheckinApi from '../util/checkin.util'

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";

const receiveAllCheckins = checkins => ({
    type: RECEIVE_ALL_CHECKINS,
    checkins
})

const receiveCheckin = checkin => ({
    type: RECEIVE_CHECKIN,
    checkin
})

export const fetchAllCheckins = () => dispatch => (
    CheckinApi.fetchAllCheckins().then( checkins => dispatch(receiveAllCheckins(checkins)))
)

export const fetchCheckin= (checkinId) => dispatch => (
    CheckinApi.fetchAllCheckins(checkinId).then( checkin => dispatch(receiveCheckin(checkin)))
)