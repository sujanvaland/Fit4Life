import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as eventActions from 'app/actions/eventActions';
import AsyncStorage from '@react-native-community/async-storage';
import { getUpcomingEvents,getCoordinatorUpcomingEvents, getPastEvents,getCoordinatorPastEvents, loadCustomerEventDetail, loadCoordinatorEventDetail, loadEventAttendances, sendFeedback, loadSubscribeNow} from 'app/api/methods/event';
import * as navigationActions from 'app/actions/navigationActions';
import { Alert } from 'react-native';

// Our worker Saga that loads filter

function* getUpcomingEventsAsync(action) {
  yield put(loginActions.enableLoader());
  let response=null;
  
  if(action.userrole == 'ROLE_USER'){
    console.log("calling user view")
    response = yield call(getUpcomingEvents,action);
  }else{
    console.log("calling coordinator view")
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
    console.log("calling past user view")
    response = yield call(getPastEvents,action);
  }else{
    console.log("calling past coordinator view")
    response = yield call(getCoordinatorPastEvents,action);
  }
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

// Subscribe Now
function* loadsubscribenowAsync(action) {
    
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(loadSubscribeNow,action);
  if (response) {
      yield put(eventActions.getUpcomingEvents());
      navigationActions.navigateToHome();
      yield put(eventActions.onSubscribeNowLoadedResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.FailedLoadingSubscribeNow(response));
      yield put(loginActions.disableLoader({}));
  }
}

export { getUpcomingEventsAsync, getPastEventsAsync, loadcustomereventdetailAsync, loadcoordinatoreventdetailAsync, loadeventattendancesAsync, sendFeedbackAsync, loadsubscribenowAsync}