import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authSlice";
import DebateReducer from "./debateSlice";

export default combineReducers({
  auth: AuthReducer,
  debate: DebateReducer,
});
