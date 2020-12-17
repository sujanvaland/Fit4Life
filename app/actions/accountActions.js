/*
 * Reducer actions related with login
 */
import * as types from './types';

export function getAccountDetail() {
    return {
        type: types.GETACCOUNT_REQUEST
    };
}

export function ongetAccountDetailResponse(response) {
    return {
        type: types.GETACCOUNT_RESPONSE,
        response
    };
}

export function getAccountDetailFailed(response) {
    return {
        type: types.GETACCOUNT_FAILED,
        response
    };
}

export function getPersonalInformation() {
    return {
        type: types.GETPERSONALINFORMATION_REQUEST
    };
}

export function ongetPersonalInformationResponse(response) {
    return {
        type: types.GETPERSONALINFORMATION_RESPONSE,
        response
    };
}

export function getPersonalInformationFailed(response) {
    return {
        type: types.GETPERSONALINFORMATION_FAILED,
        response
    };
}

export function getUserPlan() {
    return {
        type: types.GETUSERPLAN_REQUEST
    };
}

export function ongetUserPlanResponse(response) {
    return {
        type: types.GETUSERPLAN_RESPONSE,
        response
    };
}

export function getUserPlanFailed(response) {
    return {
        type: types.GETUSERPLAN_FAILED,
        response
    };
}

export function getPayments() {
    return {
        type: types.GETPAYMENTS_REQUEST
    };
}

export function ongetPaymentsResponse(response) {
    return {
        type: types.GETPAYMENTS_RESPONSE,
        response
    };
}

export function getPaymentsFailed(response) {
    return {
        type: types.GETPAYMENTS_FAILED,
        response
    };
}

export function getHealthparameters() {
    return {
        type: types.GETHEALTHPARAMETERS_REQUEST
    };
}

export function ongetHealthparametersResponse(response) {
    return {
        type: types.GETHEALTHPARAMETERS_RESPONSE,
        response
    };
}

export function getHealthparametersFailed(response) {
    return {
        type: types.GETHEALTHPARAMETERS_FAILED,
        response
    };
}

export function changePasswordRequest(action) {
    return {
        type: types.CHANGEPASSWORD_REQUEST,
        action
    };
}

export function onChangePasswordResponse(response) {
    return {
        type: types.CHANGEPASSWORD_RESPONSE,
        response
    };
}
export function onChangePasswordFailedResponse(response) {
    return {
        type: types.CHANGEPASSWORDFAILED_RESPONSE,
        response
    };
}

export function updateDeviceToken(devicetoken) {
    return {
        type: types.UPDATEDEVICETOKEN_REQUEST,
        devicetoken
    };
}
export function onupdateDeviceTokenResponse(response) {
    return {
        type: types.UPDATEDEVICETOKEN_RESPONSE,
        response
    };
}
export function onupdateDeviceTokenFailedResponse(response) {
    return {
        type: types.UPDATEDEVICETOKENFAILED_RESPONSE,
        response
    };
}


export function loadProfileImageRequest() {
    return {
        type: types.LOADPROFILEIMAGE_REQUEST
    };
}

export function onProfileImageLoadedResponse(response) {
    return {
        type: types.PROFILEIMAGELOADED_RESPONSE,
        response
    };
}

export function FailedLoadingProfileImage(response) {
    return {
        type: types.FAILEDLOADINGPROFILEIMAGE_RESPONSE,
        response
    };
}



export function requestUpdateprofileRequest(profiledetail) {
    return {
        type: types.UPDATEUSERPROFILE_REQUEST,
        profiledetail
    };
}

export function onProfileUpdatedResponse(response) {
    return {
        type: types.PROFILEUPDATED_RESPONSE,
        response
    };
}

export function FailedUpdateUserProfile(response) {
    return {
        type: types.FAILEDUPDATEPROFILE_RESPONSE,
        response
    };
}

export function loadAllHealthparameterRequest() {
    return {
        type: types.LOADALLHEALTHPARAMETER_REQUEST
    };
}

export function onloadAllHealthparameterResponse(response) {
    return {
        type: types.LOADALLHEALTHPARAMETER_RESPONSE,
        response
    };
}

export function loadAllHealthparameterFailed(response) {
    return {
        type: types.LOADALLHEALTHPARAMETER_FAILED,
        response
    };
}