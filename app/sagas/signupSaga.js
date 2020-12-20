/* Redux saga class
 * Registers the user into the app
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as signupActions from 'app/actions/signupActions';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import { signup } from 'app/api/methods/signUp';
import Toast from 'react-native-simple-toast';
// import analytics from '@react-native-firebase/analytics';

// Our worker Saga that registers the user
function* signupAsync(action) {
    yield put(loginActions.enableLoader());
    const response = yield call(signup, action.userdetail);
    console.log(response);
    if (response) {
      Alert.alert(
        'Success',
        'Signup Success.',
        [
          {text: 'OK'},
        ]
      );
      yield put(signupActions.onsignupResponse(response));
      yield put(loginActions.disableLoader({}));
      navigationActions.navigateToLogin();
    } 
    else 
    {
      Toast.show("Something went wrong.!!!", Toast.LONG);
      yield put(signupActions.signupFailed(response));
      yield put(loginActions.disableLoader({}));
    }
}

export { signupAsync }