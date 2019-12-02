import { searchPhrase } from "../actions/search/search-phrase";
import { getInputData } from "../reducers/input-data";
import { search } from "./search-thunk";

export const submit = (dispatch, getState) => {
  const state = getState();
  const searchTerm = getInputData(state);
  
  dispatch(searchPhrase(searchTerm));
  dispatch(search);
};
