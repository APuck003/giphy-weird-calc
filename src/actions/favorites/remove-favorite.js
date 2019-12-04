import { REMOVE_FAVORITE } from "../index";

export const removeFavorite = phrase => ({
  type: REMOVE_FAVORITE,
  payload: phrase
});
