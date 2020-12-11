/* account Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const accountReducer = createReducer(initialState, {

    [types.GETACCOUNT_RESPONSE](state,action) {
        return {
            ...state,
            firstname:action.response.firstName,
            lastname:action.response.lastName,
            email:action.response.email,
            customerimage:action.response.imageUrl,
            accountdetail:action.response
        };
    },
    [types.GETACCOUNT_FAILED](state) {
        return {
            ...state
        };
    },

    [types.GETPERSONALINFORMATION_RESPONSE](state,action) {
        return {
            ...state,
            personalinformation:action.response
        };
    },
    [types.GETPERSONALINFORMATION_FAILED](state) {
        return {
            ...state,
            personalinformation:null
        };
    },

    [types.GETUSERPLAN_RESPONSE](state,action) {
        return {
            ...state,
            userplan:action.response
        };
    },
    [types.GETUSERPLAN_FAILED](state) {
        return {
            ...state,
            userplan:null
        };
    },

    [types.GETPAYMENTS_RESPONSE](state,action) {
        return {
            ...state,
            payments:action.response
        };
    },
    [types.GETPAYMENTS_FAILED](state) {
        return {
            ...state,
            payments:null
        };
    },

    [types.GETHEALTHPARAMETERS_RESPONSE](state,action) {
        return {
            ...state,
            healthparameters:action.response
        };
    },
    [types.GETHEALTHPARAMETERS_FAILED](state) {
        return {
            ...state,
            healthparameters:null
        };
    },

    //  Update Device Token

    [types.UPDATEDEVICETOKEN_RESPONSE](state,action) {
        return {
            ...state,
            updatedevicetoken:action.response
        };
    },
    [types.UPDATEDEVICETOKENFAILED_RESPONSE](state,action) {
        return {
            ...state,
            updatedevicetoken:null
        };
    },

    // Change Password
    [types.CHANGEPASSWORD_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:action.response
        };
    },
    [types.CHANGEPASSWORDFAILED_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:[]
        };
    },

    [types.PROFILEIMAGELOADED_RESPONSE](state,action) {
        return {
            ...state,
            profileimage:action.response
        };
    },

    [types.FAILEDLOADINGPROFILEIMAGE_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.PROFILEUPDATED_RESPONSE](state,action) {
        return {
            ...state
        };
    },

    [types.FAILEDUPDATEPROFILE_RESPONSE](state) {
        return {
            ...state
        };
    },
    
});