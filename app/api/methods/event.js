import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function getUpcomingEvents(action) {
    var userId=action.action;
    //console.log(userId);
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.UPCOMING_EVENTLIST + '?startTime.greaterThan=' + isodate,
        null,
        'get',
        null
    );
  }

  export  function getCoordinatorUpcomingEvents(action) {
    var userId=action.action;
    //console.log(userId);
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.UPCOMING_COORDINATOREVENTLIST,
        null,
        'get',
        null
    );
  }

export  function getPastEvents(action) {
    var userId=action.action;
    //console.log(userId);
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.EVENTLIST + '?userId.equals=' + userId +'&eventAttendance.event.startTime.lessThan=' + isodate,
        null,
        'get',
        null
    );
}
export  function getCoordinatorPastEvents(action) {
    var userId=action.action;
    //console.log(userId);
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.LASTEVENTLIST+'?sort=id,desc',
        null,
        'get',
        null
    );
}

export function loadCustomerEventDetail(action) {
    return Api(
        ApiConstants.CUSTOMEREVENTDETAIL + '?id.equals=' + action.eventid,
        null,
        'get',
        null
    );
  }

export function loadCoordinatorEventDetail(action) {
    return Api(
        ApiConstants.COORDINATOREVENTDETAIL + '?id.equals=' + action.eventid,
        null,
        'get',
        null
    );
}

export function loadEventAttendances(action) {
    return Api(
        ApiConstants.EVENTATTENDANCES + '?eventId.equals=' + action.eventid,
        null,
        'get',
        null
    );
}

export function sendFeedback(action) {
    let default_rating="";
    if(action.action.default_rating==1)
    {
        default_rating="ONE";
    }
    if(action.action.default_rating==2)
    {
        default_rating="TWO";
    }
    if(action.action.default_rating==3)
    {
        default_rating="THREE";
    }
    if(action.action.default_rating==4)
    {
        default_rating="FOUR";
    }
    if(action.action.default_rating==5)
    {
        default_rating="FIVE";
    }
    return Api(
      ApiConstants.EVALUATEEVENT + '/' + action.eventAttendanceID,
      {
        observation:action.action.message,
        evaluation:action.action.Default_Rating
      },
      'post',
      null
  );
}

export function loadSubscribeNow(action) {
    return Api(
        ApiConstants.SUBSCRIBENOW + '/' + action.EventId,
        null,
        'post',
        null
    );
}

export function eventsByMonth(action) {
    return Api(
        ApiConstants.EVENTSBYMONTH + '/'+action.month+'/year/'+action.year,
        null,
        'get',
        null
    );
}

export function eventsByDate(action) {
    return Api(
        ApiConstants.EVENTSBYDATE + '/'+action.date,
        null,
        'get',
        null
    );
}

export function sendArrivalConfirmation(action) {
    return Api(
        ApiConstants.ARRIVALCONFIRMATION + '/' + action.action,
        null,
        'post',
        null
    );
}

export function cancelArrivalConfirmation(action) {
    return Api(
        ApiConstants.CANCELARRIVALCONFIRMATION + '/' + action.action,
        null,
        'post',
        null
    );
}