import * as types from "./actionTypes";

// This is a action creator which has a type(a name) and returns
// the argument(to be passed along to the reducer which updates the state with the argument)
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}
