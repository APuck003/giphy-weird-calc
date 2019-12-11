import React from 'react'
import { Image } from "../Image";
import DislikeButton from "../../containers/dislike-button";

export const FoundFavorite = props => {
  const { gif } = props
  const { url, phrase, title } = gif
  return (
      <div style={{ margin: "0 0 1rem 0" }}>
        <h5>{title}</h5>
        <div style={{position: 'relative', width: '175px', height: '125px'}}>
          <Image url={url} />
          
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <DislikeButton phrase={phrase} />
          </div>
          
        </div>
      </div>
  );
};
