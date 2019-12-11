import React from "react";
import {DefaultFavoriteGifs} from "../DefaultFavoriteGifs"
import { FoundFavorite } from "../FoundFavorite"

// style={{ flexWrap: "wrap", justifyContent: "space-around", display: "flex", flexDirection: "row", width: "100%" }}

export const FavoriteGifs = props => {
  const {likedGifs} = props
  
  return (
    <>
      {likedGifs.map((gif, index) =>
        gif.url === null ? (
          <DefaultFavoriteGifs key={index}/>
        ) : (
          <FoundFavorite key={gif.phrase} gif={gif} />
        )
      )}
    </>
  )
}
