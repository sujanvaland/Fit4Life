import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function getUpcomingEvents(action) {
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.EVENTLIST + '?eventAttendance.event.startTime.greaterThan=' + isodate,
        null,
        'get',
        null
    );
  }

export  function getPastEvents(action) {
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.EVENTLIST + '?eventAttendance.event.startTime.lessThan=' + isodate,
        null,
        'get',
        null
    );
}
