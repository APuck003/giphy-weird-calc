import React from "react";
import {StyledTitle} from '../../styles'

export const Title = props => {
  const { title } = props;
  return <StyledTitle>{title}</StyledTitle>;
};
