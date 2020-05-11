import * as types from "./actiontypes";
import * as authorApi from "../../api/authorApi";
import { apiCallError } from "./ApiStatusAction";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
