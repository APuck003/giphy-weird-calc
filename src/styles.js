import styled from "styled-components"

export const StyledSearchWrapper = styled.div`
  //background-color: lightgrey;
  //width: 60%;
  padding: 2rem;
  border-style: hidden dotted dotted hidden;
  border-width: 1px;
  flex-direction: column;
`

export const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(50, 54, 57);
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  
  h1 {
    padding-left: 2rem;
    font-size: 24px;
  }
`

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 0 1rem;
`

export const StyledForm = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
`

export const StyledInput = styled.input`
    padding: .5rem;
    width: 70%;
`

export const StyledButton = styled.button`
    padding: 0.6rem;
    border: none;
    background-color: rgb(50, 54, 57);
    text-transform: uppercase;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;
    position: relative;
    right: 3px;
`

export const StyledText = styled.div`
  padding-right: 3rem;
  line-height: 2;
  
  p {
    margin-left: 1em;
    margin-right: 1em;
  }
`

export const StyledGifResult = styled.div`
  height: 225px;
  width: 300px;
  border: 1px solid blue;
  border-radius: 2px;
`

export const StyledCalculateButton = styled(StyledButton)`
  padding: 0.8rem;
  width: 375px;
  font-size: large;
`

export const StyledCalculateWrapper = styled.div`
  text-align: center;
  padding-top: 6rem;
`

export const StyledFavoriteDefault = styled(StyledGifResult)`
  width: 225px;
  height: 200px;
  margin: 1rem 0;
`

export const StyledGifSection = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`

export const StyledDefaultSpan = styled.span`
  text-align: center;
  margin: 0;
`

export const StyledFavorites = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 90px;
`

export const StyledFavoritesWrapper = styled.div`
  display: flex;
  flex-direction: inherit;
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
`

export const StyledLikeButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const StyledLikeButton = styled.button`
  width: 100px;
  padding: 0.5rem;
  background-color: rgb(50, 54, 57);
  color: #fff;
  border-radius: 5px;
`

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledGifError = styled.div`
  height: 225px;
  width: 300px;
  border: 1px solid blue;
  border-radius: 2px;
  background-color: red;
  color: white;;
`

export const StyledDefaultErrorSpan = styled.span`
  text-align: center;
  margin: 0;
`

export const StyledResultsWrapper = styled.div`
  padding: 3rem;
  border-style: hidden dotted dotted hidden;
  border-width: 1px;
  height: 470px;
`

export const StyledFavoriteSelection = styled.div`
  width: 225px;
  height: 200px;
  margin: 1rem 0;
`

export const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`

export const StyledSlider = styled.input`
  width: 100%;
  border: 0;
  font-size: 100%;
  align-self: center;
`

export const StyledTitle = styled.h4`
  margin: 0 0 2rem 1rem;
  padding-top: 1rem;
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  width: 60%;
`
