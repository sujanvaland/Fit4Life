/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import { loginAsync,logoutAsync } from './loginSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
    //yield all([takeEvery(types.LOGOUT_REQUEST, logoutAsync)]);
}
