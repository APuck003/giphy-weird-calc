import { searchPhrase } from "../actions/search/search-phrase";
import { getSearchInput } from "../reducers/input-data";
import { search } from "./search-thunk";

export const submit = (dispatch, getState) => {
  const state = getState();
  const searchTerm = getSearchInput(state);

  dispatch(searchPhrase(searchTerm));
  dispatch(search);
};
