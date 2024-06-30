import { combineReducers } from "@reduxjs/toolkit";
import authslice from "./slices/authslice";

const rootReducer = combineReducers({
  authslice,
});

export default rootReducer;
