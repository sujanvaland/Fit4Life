import Api from 'app/api';
import ApiConstants from '../ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';
import { exists } from 'react-native-fs';

retrieveData = async (key) => {
  try {
    //environment
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};

export  function getAccountDetail(action) {
  return Api(
      ApiConstants.ACCOUNTDETAIL,
      null,
      'get',
      null
  );
}

export  async function getPersonalInformation(action) {
  let userId =  await retrieveData("userId");
  return Api(
      ApiConstants.PERSONALINFORMATION + '?userId.equals=' + userId,
      null,
      'get',
      null
  );
}

export  async function getUserPlan(action) {
  let userId =  await retrieveData("userId");
  return Api(
      ApiConstants.USERPLAN + '?userId.equals=' + userId,
      null,
      'get',
      null
  );
}

export  async function getPayments(action) {
  let userId =  await retrieveData("userId");
  return Api(
      ApiConstants.PAYMENTS + '?userPlanUserId.equals=' + userId,
      null,
      'get',
      null
  );
}

export  async function getHealthparameters(action) {
  let userId =  await retrieveData("UserRoleUserId");
  return Api(
      ApiConstants.HEALTHPARAMETERS + '?userId.equals=' + userId,
      null,
      'get',
      null
  );
}

export  function updateDeviceToken(action) {
  return Api(
      ApiConstants.UPDATEDEVICETOKEN,
      {
        device_token:action.devicetoken
      },
      'post',
      null
  );
}

export function changePassword(action) {
  return Api(
    ApiConstants.CHANGEPASSWORD,
    {
      oldpassword:action.action.oldpassword,
      newpassword:action.action.newpassword
    },
    'post',
    null
  );
}

export  function loadProfileImage(action) {
  return Api(
      ApiConstants.PROFILEIMAGE,
      null,
      'get',
      null
  );
}

export  function updateUserProfile(profiledetail) {
  
  return Api(
      ApiConstants.UPDATEUSERPROFILE,
      {
        firstName:profiledetail.profiledetail.firstname,
        lastName:profiledetail.profiledetail.lastname,
        address:profiledetail.profiledetail.address,
        phoneNumber:profiledetail.profiledetail.phonenumber
        //profilePictureFile:null
      },
      'post',
      null
  );
}

export  function loadAllHealthparameter(action) {
  return Api(
      ApiConstants.ALLHEALTHPARAMETER,
      null,
      'get',
      null
  );
}

export  async function addtohealthparameter(action) {
  let userId=await retrieveData("UserRoleUserId");
  //console.log(userId); exist;
  //let userId =  await retrieveData("userId");
  return Api(
      ApiConstants.ADDTOHEALTHPARAMETER,
      {
        userId: userId,
        healthParameterId:action.healthparameteritem.healthparameter,
        value:action.healthparameteritem.healthparameterValue
      },
      'post',
      null
  );
}

export  async function getContracts(action) {
  let userId =  await retrieveData("userId");
  return Api(
      //ApiConstants.CONTRACTS + '?userId.equals=' + userId,
      ApiConstants.CONTRACTS + '/available',
      null,
      'get',
      null
  );
}

export  async function signcontract(action) {
  return Api(
      ApiConstants.SIGNCONTRACT + '/' + action.contractID,
      null,
      'post',
      null
  );
}

export  async function getUserRolePersonalInformation(action) {
  let userId =  action.userId;
  return Api(
      ApiConstants.PERSONALINFORMATION + '?userId.equals=' + userId,
      null,
      'get',
      null
  );
}