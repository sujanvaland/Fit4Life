import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import {getAccountDetail,getPersonalInformation,getUserPlan,getPayments,updatePersonalDetail,updateDeviceToken,changePassword,loadProfileImage} from 'app/api/methods/accountDetail';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';

// Our worker Saga that loads filter

function* getAccountDetailAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getAccountDetail,action);
  //console.log(response);
  if (response.id > 0) {
      yield put(accountActions.ongetAccountDetailResponse(response));
      _storeData("userId",response.id.toString());
      yield put(accountActions.getPersonalInformation());
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.getAccountDetailFailed(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getPersonalInformationAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getPersonalInformation,action);
  //console.log(response);
  if (response[0].id > 0) {
      yield put(accountActions.ongetPersonalInformationResponse(response));
      _storeData("firstname",response[0].user.firstName);
      _storeData("lastname",response[0].user.lastName);
      _storeData("customerimage",response[0].profilePictureURL);
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.getPersonalInformationFailed(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getUserPlanAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getUserPlan,action);
  //console.log(response);
  if (response[0].id > 0) {
      yield put(accountActions.ongetUserPlanResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.getUserPlanFailed(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getPaymentsAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getPayments,action);
  //console.log(response);
  if (response.length > 0) {
      yield put(accountActions.ongetPaymentsResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.getPaymentsFailed(response));
      yield put(loginActions.disableLoader({}));
  }
};

// Update Persona Detail
function* updatePersonalDetailAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(updatePersonalDetail,action);
  //console.log(response);
  if (response.Message === "success") {
      yield put(accountActions.onupdatePersonalDetailResponse(response));
      yield put(accountActions.getAccountDetail());
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.onupdatePersonalDetailFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Update Device Token
function* updateDeviceTokenAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(updateDeviceToken,action);
  console.log(response);
  if (response.Message === "success") {
      yield put(accountActions.onupdateDeviceTokenResponse(response));
      yield put(accountActions.getAccountDetail());
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.onupdateDeviceTokenFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Change Password
function* changePasswordAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(changePassword,action);
  //console.log(response);
  if (response.Message === "success") {
      // Alert.alert(
      //     'Success',
      //     'Change Password Successfully.',
      //     [
      //       {text: 'OK'},
      //     ]
      //   );

      navigationActions.navigateToPasswordChange();
      yield put(accountActions.onChangePasswordResponse(response));
      yield put(loginActions.disableLoader({}));
      //console.log(response);
  } else {
      Alert.alert(
          'Fail',
          'Change Password Failed :' + response.Message,
          [
            {text: 'OK'},
          ]
        );
      
      navigationActions.navigateToChangePassword();
      yield put(accountActions.onChangePasswordFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
  
}

function* loadprofileimageAsync(action) {
    
  yield put(loginActions.enableLoader());
  //how to call api
  let response = {};
  response = yield call(loadProfileImage,action);
  //console.log(response);
  if (response.Message === "success") {
    if(response.results){
      yield put(accountActions.onProfileImageLoadedResponse(response.results));
    }
    yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.FailedLoadingProfileImage(response));
      yield put(loginActions.disableLoader({}));
  }
}

const _storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return value;
  } catch (error) {
    // Error saving data
    return null;
  }
};

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

export { 
  getAccountDetailAsync,
  getPersonalInformationAsync,
  getUserPlanAsync,
  getPaymentsAsync,
  updatePersonalDetailAsync,
  updateDeviceTokenAsync,
  changePasswordAsync,
  loadprofileimageAsync 
}