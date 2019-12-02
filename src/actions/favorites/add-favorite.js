import { ADD_FAVORITE } from "./index";

export const addFavorite = likedGif => ({
  type: ADD_FAVORITE,
  payload: likedGif
});
