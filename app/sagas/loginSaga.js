/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {loginUser,FbloginUser} from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';
import jwt_decode from "jwt-decode";
 

// Our worker Saga that logins the user
function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    if(action.username != ""){
      const response = yield call(loginUser, action.username, action.password);
      //console.log("123");
      //console.log(response);
      if (response.id_token != "" && response.id_token != undefined) {
          var token = response.id_token;
          var decoded = jwt_decode(token);
          yield put(loginActions.onLoginResponse(response,decoded));
          _storeData("login_token",response.id_token);
          _storeData("loginuser",action.username);
          _storeData("password",action.password);
          yield put(accountActions.getAccountDetail());
          yield call(navigationActions.navigateToHome);
          yield put(loginActions.disableLoader({}));   
      } else {
            yield put(loginActions.loginFailed(response));
            yield put(loginActions.disableLoader({}));  
      }
    }else{
      const response = yield call(FbloginUser, action.fbtoken);
      if (response.id_token != "" && response.id_token != undefined) {
          yield put(loginActions.onLoginResponse(response,{}));
          _storeData("login_token",response.id_token);
          _storeData("fbtoken",action.fbtoken);
          yield put(accountActions.getAccountDetail());
          yield call(navigationActions.navigateToHome);
          yield put(loginActions.disableLoader({}));   
      } else {
            yield put(loginActions.loginFailed(response));
            yield put(loginActions.disableLoader({}));  
      }
    }
    
}

function* logoutAsync(){
  _storeData("login_token","")
  _storeData("loginuser","");
  _storeData("password","");
  _storeData("fbtoken","");
  navigationActions.navigateToLogin();
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

export { loginAsync,logoutAsync }
