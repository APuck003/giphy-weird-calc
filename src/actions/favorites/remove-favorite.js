import { REMOVE_FAVORITE } from "../index";

export const removeFavorite = gif => ({
  type: REMOVE_FAVORITE,
  payload: gif
});
