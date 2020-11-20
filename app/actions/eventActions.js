/*
 * Reducer actions related with login
 */
import * as types from './types';


export function getUpcomingEvents(action) {
    return {
        type: types.GETUPCOMINGEVENTS_REQUEST,
        action
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

export function getPastEvents(action) {
    return {
        type: types.GETPASTEVENTS_REQUEST,
        action
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

export function loadEventDetailRequest(eventid) {
    
    return {
        type: types.LOADEVENTDETAIL_REQUEST,
        eventid
    };
}

export function onEventdetailLoadedResponse(response) {
    return {
        type: types.EVENTDETAILLOADED_RESPONSE,
        response
    };
}

export function FailedLoadingEventDetail(response) {
    return {
        type: types.FAILEDLOADINGEVENTDETAIL_RESPONSE,
        response
    };
}