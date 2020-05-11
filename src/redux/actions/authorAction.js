import * as types from "./actiontypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./ApiStatusAction";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall())
    return authorApi
      .getAuthors().then(authors => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
