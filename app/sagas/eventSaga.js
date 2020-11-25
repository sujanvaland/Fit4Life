import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as eventActions from 'app/actions/eventActions';
import { getUpcomingEvents, getPastEvents, loadCustomerEventDetail, loadEventAttendances, sendFeedback, loadSubscribeNow} from 'app/api/methods/event';
import * as navigationActions from 'app/actions/navigationActions';
import { Alert } from 'react-native';

// Our worker Saga that loads filter

function* getUpcomingEventsAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getUpcomingEvents,action);
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
  const response = yield call(getPastEvents,action);
  if (response) {
      yield put(eventActions.ongetPastEventsResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.ongetPastEventsFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

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
      navigationActions.navigateToHome();
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
  console.log(response);
  if (response) {
      yield put(eventActions.onSubscribeNowLoadedResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(eventActions.FailedLoadingSubscribeNow(response));
      yield put(loginActions.disableLoader({}));
  }
}

export { getUpcomingEventsAsync, getPastEventsAsync, loadcustomereventdetailAsync, loadeventattendancesAsync, sendFeedbackAsync, loadsubscribenowAsync}