import {addFavorite} from "../actions/favorites/add-favorite"
import {getSearchPhrase, getWeirdnessLevel} from "../reducers/search-data"
import {getTitle, getURL} from "../reducers/results-data"
import {getFavorite} from "../reducers/favorites-data"

export const likeThunk = (dispatch, getState) => {
  const state = getState()
  const phrase = getSearchPhrase(state)
  const weirdnessLevel = getWeirdnessLevel(state)
  const url = getURL(state)
  const title = getTitle(state)
  const likedGif = getFavorite(phrase, weirdnessLevel, url, title)
  dispatch(addFavorite(likedGif))
}
