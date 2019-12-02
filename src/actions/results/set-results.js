import {SET_RESULTS} from "./index"

export const setResults = (weirdnessLevel, result) => ({
  type: SET_RESULTS,
  payload: {weirdnessLevel, result}
})
