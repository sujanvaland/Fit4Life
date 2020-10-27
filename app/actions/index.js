// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as signupActions from './signupActions';
import * as forgotPasswordActions from './forgotPasswordActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions,
    signupActions,  
    forgotPasswordActions
);
