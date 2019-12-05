import {SET_RESULT} from "../index"

export const setResult = (weirdnessLevel, result) => ({
  type: SET_RESULT,
  payload: {weirdnessLevel, result}
})
