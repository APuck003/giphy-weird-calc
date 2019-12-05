import React from "react";

export const Slider = props => {
  const { weirdnessLevel, onSlide } = props;
  return (
      <input type="range" min={0} max={10} onChange={onSlide} value={weirdnessLevel}/>
  );
};
