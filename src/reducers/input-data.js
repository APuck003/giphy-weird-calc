import produce from "immer";
import {createSelector} from "reselect"
// import {createSelector} from "reselect"
import { CLEAR_INPUT, UPDATE_INPUT } from "../actions";

export const defaultState = {
  value: ""
};

export const inputData = (state = defaultState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case UPDATE_INPUT: {
        draftState.value = action.payload;
        return draftState;
      }
      case CLEAR_INPUT: {
        draftState = defaultState;
        return draftState;
      }
      default: {
        return state;
      }
    }
  });
};

export const getSearchInput = state => state.inputData.value;

export const handleEmptySearch = createSelector(
    getSearchInput,
    phrase => phrase.length === 0
)
