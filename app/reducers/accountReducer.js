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
            accountdetail:action.response,
            userrole:(action.response?.authorities?.length > 0 ? action.response?.authorities[0] : "")
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

    [types.LOADALLHEALTHPARAMETER_RESPONSE](state,action) {
        return {
            ...state,
            allhealthparameter:action.response
        };
    },
    [types.LOADALLHEALTHPARAMETER_FAILED](state) {
        return {
            ...state,
            allhealthparameter:null
        };
    },
    [types.ADDTOHEALTHPARAMETER_RESPONSE](state, action) {
        return {
            ...state,
            addtohealthparameterstatus: action.response,
        };
    },
    [types.ADDTOHEALTHPARAMETERFILED_RESPONSE](state) {
        return { 
            ...state,
            addtohealthparameterstatus:null
        };
    },
    [types.GETCONTRACTS_RESPONSE](state,action) {
        return {
            ...state,
            contracts:action.response
        };
    },
    [types.GETCONTRACTS_FAILED](state) {
        return {
            ...state,
            contracts:null
        };
    },

    [types.SIGNCONTRACT_RESPONSE](state, action) {
        return {
            ...state,
            signcontractstatus: action.response,
        };
    },
    [types.SIGNCONTRACTFILED_RESPONSE](state) {
        return { 
            ...state,
            signcontractstatus:null
        };
    },

    [types.GETUSERROLEPERSONALINFORMATION_RESPONSE](state,action) {
        return {
            ...state,
            userrolepersonalinformation:action.response
        };
    },
    [types.GETUSERROLEPERSONALINFORMATION_FAILED](state) {
        return {
            ...state,
            userrolepersonalinformation:null
        };
    },

    [types.GETUSERCOMMENTARIES_RESPONSE](state,action) {
        return {
            ...state,
            usercommentaries:action.response
        };
    },
    [types.GETUSERCOMMENTARIES_FAILED](state) {
        return {
            ...state,
            usercommentaries:null
        };
    },

    // Send Comment
    [types.SENDCOMMENT_FAILED](state) {
        return {
            ...state
        };
    },
    [types.SENDCOMMENT_RESPONSE](state,action) {
        return {
            ...state
        };
    },
    
});