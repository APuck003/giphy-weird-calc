import {SET_GIF_SEARCH_RESULT} from "./index"

export const setGifSearchResult = (weirdnessLevel, result) => ({
  type: SET_GIF_SEARCH_RESULT,
  payload: {weirdnessLevel, result}
})
