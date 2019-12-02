import produce from "immer"
import {SET_GIF_SEARCH_PHRASE, SET_WEIRDNESS_LEVEL, CLEAR_SEARCH_DATA} from "../actions"

export const defaultState = {
  searchTerm: "",
  weirdnessLevel: 0,
}

export const searchData = (state = defaultState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case SET_GIF_SEARCH_PHRASE: {
        draftState.searchTerm = action.payload
        return draftState
      }
      case SET_WEIRDNESS_LEVEL: {
        draftState.weirdnessLevel = action.payload
        return draftState
      }
      case CLEAR_SEARCH_DATA: {
        draftState = defaultState
        return draftState
      }
      default: {
        return state
      }
    }
  })
}

export const getSearchTerm = state => state.searchData.searchTerm
export const getWeirdnessLevel = state => state.searchData.weirdnessLevel;
