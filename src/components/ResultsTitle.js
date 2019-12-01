import React from "react";
import styled from "styled-components"

const StyledTitle = styled.h4`
  margin: 0 0 2rem 1rem;
`

export const ResultsTitle = props => {
  const { title } = props;
  return <StyledTitle>{title}</StyledTitle>;
};
