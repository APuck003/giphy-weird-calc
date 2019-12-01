import produce from "immer"
import {SET_GIF_SEARCH_PHRASE} from "../actions"

export const defaultState = {
  searchTerm: "",
}

export const searchData = (state = defaultState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case SET_GIF_SEARCH_PHRASE: {
        draftState.searchTerm = action.payload
        return draftState
      }
      default: {
        return state
      }
    }
  })
}

export const getSearchTerm = state => state.searchData.searchTerm
