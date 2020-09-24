import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import events from "./event";

export default combineReducers({ events, form });
