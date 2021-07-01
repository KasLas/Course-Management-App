// Root reducer - combines all reducers in to one
import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses: courses,
});

export default rootReducer;
