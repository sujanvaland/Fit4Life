/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as accountReducer from './accountReducer';
export default Object.assign(loginReducer, loadingReducer, accountReducer);
