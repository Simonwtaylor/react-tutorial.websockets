import { combineReducers } from "redux";
import { taskReducer } from "./task/";
import { websocketReducer } from "./websocket/";

const rootReducer = combineReducers({
  task: taskReducer,
  websocket: websocketReducer,
});

export default rootReducer;
