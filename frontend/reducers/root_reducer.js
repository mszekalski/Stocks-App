import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer.js";
import uiReducer from "./ui_reducer.js";
import usersReducer from "./users_reducer.js";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  users: usersReducer
});

export default rootReducer;
