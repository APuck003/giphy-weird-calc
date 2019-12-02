import { REMOVE_FAVORITE } from "./index";

export const removeFavorite = term => ({
  type: REMOVE_FAVORITE,
  payload: term
});
