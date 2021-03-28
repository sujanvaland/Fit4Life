/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLogin(username, password,fbtoken) {
    return {
        type: types.LOGIN_REQUEST,
        username,
        password,
        fbtoken
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function onLoginResponse(response,decoded) {
    return {
        type: types.LOGIN_RESPONSE,
        response,
        decoded
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}
