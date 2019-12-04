import { searchPhrase } from "../actions/search/search-phrase";
import { getSearchInput } from "../reducers/input-data";
import { searchThunk } from "./search-thunk";

export const submitThunk = (dispatch, getState) => {
  const state = getState();
  const phrase = getSearchInput(state);

  dispatch(searchPhrase(phrase));
  dispatch(searchThunk);
};
