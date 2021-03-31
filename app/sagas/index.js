/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import { loginAsync } from './loginSaga';
import { signupAsync } from './signupSaga';
import { getAccountDetailAsync,getPersonalInformationAsync,getUserPlanAsync,getPaymentsAsync,getHealthparametersAsync,
    updateDeviceTokenAsync,changePasswordAsync, loadprofileimageAsync, updateUserProfileAsync,loadAllHealthparameterAsync, addToHealthParameterAsync, getContractsAsync, signContractAsync, getUserRolePersonalInformationAsync } from './accountSaga';
import { getUpcomingEventsAsync, getPastEventsAsync, loadcustomereventdetailAsync, loadcoordinatoreventdetailAsync, 
    loadeventattendancesAsync, 
    sendFeedbackAsync,
    loadsubscribenowAsync,eventsByDateAsync, eventsByMonthAsync,
    sendArrivalConfirmationAsync, cancelArrivalConfirmationAsync} from './eventSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
    yield all([takeEvery(types.SIGNUP_REQUEST, signupAsync)]);
    
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
    yield all([takeEvery(types.LOADALLHEALTHPARAMETER_REQUEST, loadAllHealthparameterAsync)]);
    yield all([takeEvery(types.ADDTOHEALTHPARAMETER_REQUEST, addToHealthParameterAsync)]);
    yield all([takeEvery(types.GETCONTRACTS_REQUEST, getContractsAsync)]);
    yield all([takeEvery(types.SIGNCONTRACT_REQUEST, signContractAsync)]);

    yield all([takeEvery(types.GETUSERROLEPERSONALINFORMATION_REQUEST, getUserRolePersonalInformationAsync)]);

    //Event Saga
    yield all([takeEvery(types.GETUPCOMINGEVENTS_REQUEST, getUpcomingEventsAsync)]);
    yield all([takeEvery(types.GETPASTEVENTS_REQUEST, getPastEventsAsync)]);
    yield all([takeEvery(types.LOADCUSTOMEREVENTDETAIL_REQUEST, loadcustomereventdetailAsync)]);
    yield all([takeEvery(types.LOADCOORDINATOREVENTDETAIL_REQUEST, loadcoordinatoreventdetailAsync)]);
    yield all([takeEvery(types.LOADEVENTATTENDANCES_REQUEST, loadeventattendancesAsync)]);
    yield all([takeEvery(types.SENDFEEDBACK_REQUEST, sendFeedbackAsync)]);
    yield all([takeEvery(types.LOADSUBSCRIBENOW_REQUEST, loadsubscribenowAsync)]);
    yield all([takeEvery(types.GETEVENTSBYDATE_REQUEST, eventsByDateAsync)]);
    yield all([takeEvery(types.GETEVENTSBYMONTH_REQUEST, eventsByMonthAsync)]);
    yield all([takeEvery(types.SENDARRIVALCONFIRMATION_REQUEST, sendArrivalConfirmationAsync)]);
    yield all([takeEvery(types.CANCELARRIVALCONFIRMATION_REQUEST, cancelArrivalConfirmationAsync)]);
}
