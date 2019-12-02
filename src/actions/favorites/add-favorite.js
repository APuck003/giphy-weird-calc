import { ADD_FAVORITE } from "../index";

export const addFavorite = gif => ({
  type: ADD_FAVORITE,
  payload: gif
});
