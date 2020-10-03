//now we import another module called handleActions, to handle the actions...
//know that we are importing handle actions because it is more than one action...for singular actions, import 'handleAction' instead.
import { handleActions } from "redux-actions";

const initialState = {
  //so we handled in redux-thunk without redux-actions, we also have three initialState fields:
  userDetails: {},
  error: null,
  loading: false,
};

export const user = handleActions(
  //instead of writing conditions for different stages, we can just write one reducer logic to handle all the stages:
  /* to understand this:
  firstly,
    in user.actions.js, we fire the fetchUser() action before the axios api call...
    now for us to be able to do something as that point in time, we can say that: because at that point in time, the action does not have a payload (remember a payload for an action created by createAction is equal to the parameter in the action when the action is called, and because the action fetchUser() does not have a payload when it is called before the axios http client... this means that we can write a logic that says:
    "loading in our initial state should be set to true when the action fetchUser() does not have a payload, and false when it does." as we have done below.
    )

    secondly,
    in user.action.js, the fetchUser() action now has a paramater, of which redux-actions module will take as its payload, we then can set our userDetails field in the reducer's state to be equal to the payload in the action, of which in user.actions.js is 'response.data'

    thirdly, meaning third stage[as you'd expect is when it returns an error:],

    now you should understand that any action created by creatAction module from redux-action package has an error field (which by default is false) by default to handle errors.
    so if you check user.actions.js, when there's an error, we fire the action fetchUser() again, but this time we give it a parameter 'new Error()'and set the value of Error() to be error caught by the axios http client... that is,  we have:
     fetchUser(new Error(error)) ...as you can see in user.actions.js.
  so we then set our error to be equal to error in the action, and by this point in time, error in the action is equal to true... because 'new Error()' is a method that helps convert the error field in the action fetchUser() to be set to true.

  SO ALL THESE ARE THEN USE TO DISPLAY DIFFERENT THINGS AT DIFFERENT TIMES IN APP.JS ...check it out!!!!

  IN INDEX.JS, WE IMPORTED REDUX-LOGGER TO BE PART OF OUR MIDDLEWARE TO HELP US LOG THESE STAGES TO THE CONSOLE, YOU CAN SEE FOR YOURSELF!
  */
  {
    FETCH_USER: (state = initialState, action) => ({
      ...state,
      loading: !action.payload ? true : false,
      userDetails: action.payload,
      error: action.error,
    }),
  },
  { userDetails: {}, error: null, loading: false }
);
/* checkout the link for better, robust use cases: 
https://redux-actions.js.org/api/handleaction */
