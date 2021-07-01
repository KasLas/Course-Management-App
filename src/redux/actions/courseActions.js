import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// This is a action creator which has a type(a name) and returns
// the argument(to be passed along to the reducer which updates the state with the argument)

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

// thunk function
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
