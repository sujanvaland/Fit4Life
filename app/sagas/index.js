/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import { loginAsync } from './loginSaga';
import { getAccountDetailAsync,getPersonalInformationAsync,getUserPlanAsync,getPaymentsAsync,getHealthparametersAsync,
    updateDeviceTokenAsync,changePasswordAsync, loadprofileimageAsync, updateUserProfileAsync } from './accountSaga';
import { getUpcomingEventsAsync, getPastEventsAsync, loadcustomereventdetailAsync, 
    loadeventattendancesAsync, 
    sendFeedbackAsync,
    loadsubscribenowAsync} from './eventSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
    
    //account Saga
     yield all([takeEvery(types.GETACCOUNT_REQUEST, getAccountDetailAsync)]);
     yield all([takeEvery(types.GETPERSONALINFORMATION_REQUEST, getPersonalInformationAsync)]);
     yield all([takeEvery(types.GETUSERPLAN_REQUEST, getUserPlanAsync)]);
     yield all([takeEvery(types.GETPAYMENTS_REQUEST, getPaymentsAsync)]);
     yield all([takeEvery(types.GETHEALTHPARAMETERS_REQUEST, getHealthparametersAsync)]);
     yield all([takeEvery(types.UPDATEUSERPROFILE_REQUEST, updateUserProfileAsync)]);
    // yield all([takeEvery(types.UPDATEDEVICETOKEN_REQUEST, updateDeviceTokenAsync)]);
    // yield all([takeEvery(types.CHANGEPASSWORD_REQUEST, changePasswordAsync)]);
    // yield all([takeEvery(types.LOADPROFILEIMAGE_REQUEST, loadprofileimageAsync)]);

    //Event Saga
    yield all([takeEvery(types.GETUPCOMINGEVENTS_REQUEST, getUpcomingEventsAsync)]);
    yield all([takeEvery(types.GETPASTEVENTS_REQUEST, getPastEventsAsync)]);
    yield all([takeEvery(types.LOADCUSTOMEREVENTDETAIL_REQUEST, loadcustomereventdetailAsync)]);
    yield all([takeEvery(types.LOADEVENTATTENDANCES_REQUEST, loadeventattendancesAsync)]);
    yield all([takeEvery(types.SENDFEEDBACK_REQUEST, sendFeedbackAsync)]);
    yield all([takeEvery(types.LOADSUBSCRIBENOW_REQUEST, loadsubscribenowAsync)]);
}
