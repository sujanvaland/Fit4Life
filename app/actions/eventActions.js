/*
 * Reducer actions related with login
 */
import * as types from './types';


export function getUpcomingEvents() {
    return {
        type: types.GETUPCOMINGEVENTS_REQUEST
    };
}
export function ongetUpcomingEventsResponse(response) {
    return {
        type: types.GETUPCOMINGEVENTS_RESPONSE,
        response
    };
}
export function ongetUpcomingEventsFailedResponse(response) {
    return {
        type: types.GETUPCOMINGEVENTSFAILED_RESPONSE,
        response
    };
}

export function getPastEvents() {
    return {
        type: types.GETPASTEVENTS_REQUEST
    };
}
export function ongetPastEventsResponse(response) {
    return {
        type: types.GETPASTEVENTS_RESPONSE,
        response
    };
}
export function ongetPastEventsFailedResponse(response) {
    return {
        type: types.GETPASTEVENTSFAILED_RESPONSE,
        response
    };
}