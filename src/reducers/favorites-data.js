import {produce} from "immer"
import {ADD_FAVORITE, EMPTY_FAVORITES, REMOVE_FAVORITE} from "../actions"
import {createSelector} from "reselect"
import {getSearchPhrase} from "./search-data"
import {isResultEmpty} from "./results-data"

export const getFavorite = (
    phrase = "",
    weirdnessLevel = 0,
    url = null,
    title = null) => ({phrase, weirdnessLevel, url, title})

export const defaultState = {
  favorited: [],
  empty: [
    getFavorite(),
    getFavorite(),
    getFavorite(),
    getFavorite(),
    getFavorite()
  ]
}

export const favoritesData = (state = defaultState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case ADD_FAVORITE: {
        const favorite = action.payload
        draftState.favorited.push(favorite)
        draftState.empty.pop()
        return draftState
      }
      case REMOVE_FAVORITE: {
        const removeGif = action.payload
        draftState.favorited = draftState.favorited.filter(gif => gif.phrase !== removeGif)
        draftState.empty.push(getFavorite())
        return draftState
      }
      case EMPTY_FAVORITES: {
        draftState = defaultState
        return draftState
      }
      default: {
        return state
      }
    }
  })
}

export const MAX_FAVORITES = 5

export const getFavoritedGifs = state => state.favoritesData.favorited
export const getEmptyFavorites = state => state.favoritesData.empty

export const getFavorites = createSelector(
    getFavoritedGifs,
    getEmptyFavorites,
    (favorited, empty) => [...favorited, ...empty]
)

export const favoritesRemaining = createSelector(
    getFavoritedGifs,
    favorited => MAX_FAVORITES - favorited.length
)

export const isFavoritesRemaining = createSelector(
    favoritesRemaining,
    remaining => remaining > 0
)

export const handleGifLikes = createSelector(
    getFavoritedGifs,
    getSearchPhrase,
    isResultEmpty,
    isFavoritesRemaining,
    (favorited, submittedPhrase, isResultEmpty, isFavoritesRemaining) =>
        !isResultEmpty &&
        isFavoritesRemaining &&
        favorited.every(gif => gif.phrase !== submittedPhrase)
)

export const getWeirdScore = createSelector(
    getFavorites,
    favorites => {
      const weirdNumTotal = favorites.reduce((total, gif) => {
        return total + gif.weirdnessLevel
      }, 0)
      const averageNum = weirdNumTotal / MAX_FAVORITES
      const remainder = averageNum % 1
      return remainder.toFixed(2) >= 0.5
          ? Math.ceil(averageNum)
          : Math.floor(averageNum)
    }
)

