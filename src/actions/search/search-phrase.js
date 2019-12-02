import {SEARCH_PHRASE} from "../index"

export const searchPhrase = term => ({
  type: SEARCH_PHRASE,
  payload: term
})
