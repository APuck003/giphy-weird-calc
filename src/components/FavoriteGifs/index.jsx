import React from "react";
import {DefaultFavoriteGifs} from "../DefaultFavoriteGifs"
import { FoundFavorite } from "../FoundFavorite";


export const FavoriteGifs = props => {
  const { likedGifs } = props;
  return (
    <div>
      {likedGifs.map((gif, index) =>
        gif.url === null ? (
          <DefaultFavoriteGifs />
        ) : (
          <FoundFavorite key={gif.phrase} gif={gif} />
        )
      )}
    </div>
  );
};
