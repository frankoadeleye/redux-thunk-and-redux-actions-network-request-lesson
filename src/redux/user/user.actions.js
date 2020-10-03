import { FETCH_USER } from "./user.types";
import axios from "axios";

import { createAction } from "redux-actions";

export function fetchGitHubUser() {
  //the returns statement now returns a function. this function is a thunk. remember Reducers don't accept functions, but only objects, so we have to use redux-thunk library to convert this function to an object
  return (dispatch, getState) => {
    //we make our api call here...

    //we dispatch the first action, which by convention should indicate the beginning of an action...
    //do dispatch an action means 'let the action's store modification take effect, as allowed by the reducer'
    //the fetchUserBegin() action is written below and contents only a type key value pair... we probably need it when we want to let the user know that something as kicked off. We'll see how's that as we go on.
    dispatch(fetchUser());

    //now we return a function, which is an http client (fetch or axios)...
    return (
      axios
        .get("https://api.github.com/users/frankoadeleye")
        .then((response) => {
          //when data is gotten (because it is a get request), we then want to dispatch another action, indicating that data has successfully been gotten....
          dispatch(fetchUser(response.data));
          return response.data;
        })
        //if not successfully gotten, we dispatch another action indicating that the data was not successfully gotten.
        // .catch((error) => dispatch(fetchUserFailure(error)))
        .catch((error) => dispatch(fetchUser(new Error(error))))
    );
  };
}

export const fetchUser = createAction(FETCH_USER);
