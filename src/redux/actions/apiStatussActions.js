import * as types from "./actionTypes";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL /*Second parameter only for data*/ };
}
