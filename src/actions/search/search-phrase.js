import {SEARCH_PHRASE} from "../index"

export const searchPhrase = phrase => ({
  type: SEARCH_PHRASE,
  payload: phrase
})
