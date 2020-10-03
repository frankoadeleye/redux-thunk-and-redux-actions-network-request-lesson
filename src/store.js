import { createStore, applyMiddleware } from "redux";
/*because actions are supposed to be plain objects, and our functions are wrapped in a thunk in fetchGitHubUser() function in user.actions.js, and because of this we need redux thunk middleware to convert back the function to an object before it reaches the reducer..because the reducer only accepts objects.
 */

import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
// import myLoggingMiddleware from "./redux/myLoggingMiddleware/myLoggingMiddleware";
import logger from "redux-logger";

/*so we have our redux store created, with first value as the rootReducers that combines all reducers, second paramter should be initialState of our app... and since we don't set any, it means it's empty...
third parameter is applyMiddleware.
*/
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
