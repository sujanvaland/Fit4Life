import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as eventActions from 'app/actions/eventActions';
import AsyncStorage from '@react-native-community/async-storage';
import { eventsByMonth,eventsByDate,getUpcomingEvents,getCoordinatorUpcomingEvents, getPastEvents,getCoordinatorPastEvents, loadCustomerEventDetail, loadCoordinatorEventDetail, loadEventAttendances, sendFeedback, loadSubscribeNow, sendArrivalConfirmation, cancelArrivalConfirmation, checkUserByEmail, loadSubscribeUserNow} from 'app/api/methods/event';
import * as navigationActions from 'app/actions/navigationActions';
import { Alert } from 'react-native';

// Our worker Saga that loads filter

function* getUpcomingEventsAsync(action) {
  yield put(loginActions.enableLoader());
  let response=null;
  
  if(action.userrole == 'ROLE_USER'){
    response = yield call(getUpcomingEvents,action);
  }else{
    response = yield call(getCoordinatorUpcomingEvents,action);
  }
  if (response) {
      yield put(eventActions.ongetUpcomingEventsResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.ongetUpcomingEventsFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

function* getPastEventsAsync(action) {
  yield put(loginActions.enableLoader());
  let response=null;
  if(action.userrole == 'ROLE_USER'){
    response = yield call(getPastEvents,action);
  }else{
    response = yield call(getCoordinatorPastEvents,action);
  }
  //console.log("123");
  console.log(response);
  if (response) {
      yield put(eventActions.ongetPastEventsResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.ongetPastEventsFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

_retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};

function* loadcustomereventdetailAsync(action) {
    
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(loadCustomerEventDetail,action);
  //console.log(response);
  if (response) {
    yield put(eventActions.onCustomerEventDetailLoadedResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.FailedLoadingCustomerEventDetail(response));
      yield put(loginActions.disableLoader({}));
  }
}

function* loadcoordinatoreventdetailAsync(action) {
    
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(loadCoordinatorEventDetail,action);
  //console.log(response);
  if (response) {
    yield put(eventActions.onCoordinatorEventDetailLoadedResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.FailedLoadingCoordinatorEventDetail(response));
      yield put(loginActions.disableLoader({}));
  }
}

function* loadeventattendancesAsync(action) {
    
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(loadEventAttendances,action);
  //console.log(response);
  if (response) {
    yield put(eventActions.onEventAttendancesLoadedResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.FailedLoadingEventAttendances(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Send Feedback
function* sendFeedbackAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  let response = yield call(sendFeedback,action);
  //console.log(response);
  if (response) {
      yield put(eventActions.sendFeedbackResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.sendFeedbackFailed(response));
      yield put(loginActions.disableLoader({}));
  }
}
// get events by month
function* eventsByMonthAsync(action) {
  yield put(loginActions.enableLoader());
  let response = yield call(eventsByMonth,action);
  //console.log("123");
  console.log(response);
  if (response) {
      yield put(eventActions.ongeteventsByMonthResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.ongeteventsByMonthResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

// get events by date
function* eventsByDateAsync(action) {
  yield put(loginActions.enableLoader());
  let response = yield call(eventsByDate,action);
  if (response) {
      yield put(eventActions.ongeteventsByDateResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.ongeteventsByDateResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}
// Subscribe Now
function* loadsubscribenowAsync(action) {
    
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(loadSubscribeNow,action);
  //console.log(response);
  if (response?.status!='400') {
      yield put(eventActions.getUpcomingEvents());
      navigationActions.navigateToHome();
      yield put(eventActions.onSubscribeNowLoadedResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      Alert.alert(
        'Fail',
        response.title,
        [
          {text: 'OK'},
        ]
      );
      yield put(eventActions.FailedLoadingSubscribeNow(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Send ArrivalConfirmation
function* sendArrivalConfirmationAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  let response = yield call(sendArrivalConfirmation,action);
  console.log(response);
  if (response) {
      yield put(eventActions.loadEventAttendancesRequest(response.event.id));
      yield put(eventActions.sendArrivalConfirmationResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.sendArrivalConfirmationFailed(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Cancel ArrivalConfirmation
function* cancelArrivalConfirmationAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  let response = yield call(cancelArrivalConfirmation,action);
  console.log(response);
  if (response) {
      yield put(eventActions.loadEventAttendancesRequest(response.event.id));
      yield put(eventActions.cancelArrivalConfirmationResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.cancelArrivalConfirmationFailed(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Check User By Email
function* checkUserByEmailAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  let response = yield call(checkUserByEmail,action);
  if (response.length > 0) {
    if(response[0].authorities[0] == 'ROLE_USER')
    {
      let userId=response[0].id.toString();
      let eventID=action.action.eventID;
      // console.log(userId);
      // console.log(eventID);
      const new_response = yield call(loadSubscribeUserNow,{userId:4,eventID:eventID});
      console.log(new_response);
      if (new_response?.status!='400') {
          yield put(eventActions.getUpcomingEvents());
          navigationActions.navigateToHome();
          yield put(eventActions.checkUserByEmailResponse(response));
          yield put(eventActions.onSubscribeNowLoadedResponse(new_response));
          yield put(loginActions.disableLoader({}));
      } else {
          Alert.alert(
            'Fail',
            new_response.title,
            [
              {text: 'OK'},
            ]
          );
          yield put(eventActions.FailedLoadingSubscribeNow(new_response));
          yield put(loginActions.disableLoader({}));
      }
      
    }
    else
    {
      Alert.alert(
        'Fail',
        'Access denied for this user.',
        [
          {text: 'OK'},
        ]
      );
      yield put(eventActions.checkUserByEmailFailed(response));
      yield put(loginActions.disableLoader({}));
    }
  } else {
    Alert.alert(
      'Fail',
      'User not available.',
      [
        {text: 'OK'},
      ]
    );
      yield put(eventActions.checkUserByEmailFailed(response));
      yield put(loginActions.disableLoader({}));
  }
}

export { eventsByMonthAsync,eventsByDateAsync,getUpcomingEventsAsync, getPastEventsAsync, loadcustomereventdetailAsync, loadcoordinatoreventdetailAsync, loadeventattendancesAsync, sendFeedbackAsync, loadsubscribenowAsync, sendArrivalConfirmationAsync, cancelArrivalConfirmationAsync, checkUserByEmailAsync}