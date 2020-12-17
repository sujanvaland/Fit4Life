/* Signup Reducer
 * handles Signup states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
   
};

export const signupReducer = createReducer(initialState, {
    [types.SIGNUP_RESPONSE](state, action) {
        return {
            state
        };
    },
    [types.SIGNUP_FAILED](state,action) {
        return {
            state
        };
    }
});
