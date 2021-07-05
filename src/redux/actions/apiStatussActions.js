import * as types from "./actionTypes";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL /*Second parameter only for data*/ };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR /*Second parameter only for data*/ };
}
