/*
 * Reducer actions related with login
 */
import * as types from './types';


export function getUpcomingEvents(userid,userrole) {
    return {
        type: types.GETUPCOMINGEVENTS_REQUEST,
        userid,
        userrole
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

export function getPastEvents(userid,userrole) {
    return {
        type: types.GETPASTEVENTS_REQUEST,
        userid,
        userrole
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

export function loadCustomerEventDetailRequest(eventid) {
    return {
        type: types.LOADCUSTOMEREVENTDETAIL_REQUEST,
        eventid
    };
}

export function onCustomerEventDetailLoadedResponse(response) {
    return {
        type: types.CUSTOMEREVENTDETAILLOADED_RESPONSE,
        response
    };
}

export function FailedLoadingCustomerEventDetail(response) {
    return {
        type: types.FAILEDLOADINGCUSTOMEREVENTDETAIL_RESPONSE,
        response
    };
}

export function loadCoordinatorEventDetailRequest(eventid) {
    return {
        type: types.LOADCOORDINATOREVENTDETAIL_REQUEST,
        eventid
    };
}

export function onCoordinatorEventDetailLoadedResponse(response) {
    return {
        type: types.COORDINATOREVENTDETAILLOADED_RESPONSE,
        response
    };
}

export function FailedLoadingCoordinatorEventDetail(response) {
    return {
        type: types.FAILEDLOADINGCOORDINATOREVENTDETAIL_RESPONSE,
        response
    };
}

export function loadEventAttendancesRequest(eventid) {
    return {
        type: types.LOADEVENTATTENDANCES_REQUEST,
        eventid
    };
}

export function onEventAttendancesLoadedResponse(response) {
    return {
        type: types.EVENTATTENDANCESLOADED_RESPONSE,
        response
    };
}

export function FailedLoadingEventAttendances(response) {
    return {
        type: types.FAILEDLOADINGEVENTATTENDANCES_RESPONSE,
        response
    };
}

//Send Feedback
export function sendFeedback(action,eventAttendanceID) {
    return {
        type: types.SENDFEEDBACK_REQUEST,
        action,
        eventAttendanceID
    };
}

export function sendFeedbackResponse(data) {
    return {
        type: types.SENDFEEDBACK_RESPONSE,
        data
    };
}

export function sendFeedbackFailed() {
    return {
        type: types.SENDFEEDBACK_FAILED
    };
}

// Subscribe Now Request Response Start

export function loadSubscribeNowRequest(EventId) {
    return {
        type: types.LOADSUBSCRIBENOW_REQUEST,
        EventId
    };
}

export function onSubscribeNowLoadedResponse(response) {
    return {
        type: types.SUBSCRIBENOWLOADED_RESPONSE,
        response
    };
}

export function FailedLoadingSubscribeNow(response) {
    return {
        type: types.FAILEDLOADINGSUBSCRIBENOW_RESPONSE,
        response
    };
}

export function ongeteventsByMonth(month,year) {
    return {
        type: types.GETEVENTSBYMONTH_REQUEST,
        month,
        year
    };
}

export function ongeteventsByMonthResponse(response) {
    return {
        type: types.GETEVENTSBYMONTH_RESPONSE,
        response
    };
}
export function ongeteventsByMonthFailedResponse(response) {
    return {
        type: types.GETEVENTSBYMONTHFAILED_RESPONSE,
        response
    };
}

export function ongeteventsByDate(date) {
    return {
        type: types.GETEVENTSBYDATE_REQUEST,
        date
    };
}
export function ongeteventsByDateResponse(response) {
    return {
        type: types.GETEVENTSBYDATE_RESPONSE,
        response
    };
}
export function ongeteventsByDateFailedResponse(response) {
    return {
        type: types.GETEVENTSBYDATEFAILED_RESPONSE,
        response
    };
}

//Subscribe Now Request Response End

//Send ArrivalConfirmation
export function sendArrivalConfirmation(action) {
    return {
        type: types.SENDARRIVALCONFIRMATION_REQUEST,
        action
    };
}

export function sendArrivalConfirmationResponse(data) {
    return {
        type: types.SENDARRIVALCONFIRMATION_RESPONSE,
        data
    };
}

export function sendArrivalConfirmationFailed() {
    return {
        type: types.SENDARRIVALCONFIRMATION_FAILED
    };
}

//Cancel ArrivalConfirmation
export function cancelArrivalConfirmation(action) {
    return {
        type: types.CANCELARRIVALCONFIRMATION_REQUEST,
        action
    };
}

export function cancelArrivalConfirmationResponse(data) {
    return {
        type: types.CANCELARRIVALCONFIRMATION_RESPONSE,
        data
    };
}

export function cancelArrivalConfirmationFailed() {
    return {
        type: types.CANCELARRIVALCONFIRMATION_FAILED
    };
}

//Check User By Email
export function checkUserByEmail(action) {
    return {
        type: types.CHECKUSERBYEMAIL_REQUEST,
        action
    };
}

export function checkUserByEmailResponse(data) {
    return {
        type: types.CHECKUSERBYEMAIL_RESPONSE,
        data
    };
}

export function checkUserByEmailFailed() {
    return {
        type: types.CHECKUSERBYEMAIL_FAILED
    };
}
