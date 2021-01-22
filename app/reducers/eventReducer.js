/* event Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const eventReducer = createReducer(initialState, {

    [types.GETUPCOMINGEVENTS_RESPONSE](state, action) {
        return {
            ...state,
            upcomingevents: action.response
        };
    },

    [types.GETUPCOMINGEVENTSFAILED_RESPONSE](state) {
        return {
            ...state,
            upcomingevents: []
        };
    },

    [types.GETPASTEVENTS_RESPONSE](state, action) {
        return {
            ...state,
            pastevents: action.response
        };
    },

    [types.GETPASTEVENTSFAILED_RESPONSE](state) {
        return {
            ...state,
            pastevents: []
        };
    },

    [types.CUSTOMEREVENTDETAILLOADED_RESPONSE](state,action) {
        return {
            ...state,
            customereventdetail:action.response
        };
    },

    [types.FAILEDLOADINGCUSTOMEREVENTDETAIL_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.COORDINATOREVENTDETAILLOADED_RESPONSE](state,action) {
        return {
            ...state,
            coordinatoreventdetail:action.response
        };
    },

    [types.FAILEDLOADINGCOORDINATOREVENTDETAIL_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.EVENTATTENDANCESLOADED_RESPONSE](state,action) {
        return {
            ...state,
            eventattendances:action.response
        };
    },

    [types.FAILEDLOADINGEVENTATTENDANCES_RESPONSE](state) {
        return {
            ...state
        };
    },

    // Send Feedback
    [types.SENDFEEDBACK_FAILED](state) {
        return {
            ...state
        };
    },
    [types.SENDFEEDBACK_RESPONSE](state,action) {
        return {
            ...state
        };
    },

    // SubscribeNow

    [types.SUBSCRIBENOWLOADED_RESPONSE](state,action) {
        return {
            ...state,
            subscribenow:action.response
        };
    },

    [types.FAILEDLOADINGSUBSCRIBENOW_RESPONSE](state) {
        return {
            ...state
        };
    },
});