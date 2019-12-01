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
