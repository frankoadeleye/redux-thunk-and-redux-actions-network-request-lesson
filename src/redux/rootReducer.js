//so the root reducer is what combines all reducers and set all incoming reducers to be values of keys that'll be set in the combine reducer...
import { combineReducers } from "redux";
import { user } from "./user/user.reducer";

export default combineReducers({
  user: user,
});
