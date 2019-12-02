import produce from "immer"
import {SEARCH_PHRASE, SET_WEIRDNESS_LEVEL, CLEAR_SEARCH} from "../actions"

export const defaultState = {
  phrase: "",
  weirdnessLevel: 0,
}

export const searchData = (state = defaultState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case SEARCH_PHRASE: {
        draftState.phrase = action.payload
        return draftState
      }
      case SET_WEIRDNESS_LEVEL: {
        draftState.weirdnessLevel = action.payload
        return draftState
      }
      case CLEAR_SEARCH: {
        draftState = defaultState
        return draftState
      }
      default: {
        return state
      }
    }
  })
}

export const getSearchPhrase = state => state.searchData.phrase
export const getWeirdnessLevel = state => state.searchData.weirdnessLevel;
