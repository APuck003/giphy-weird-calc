import {createStore} from "redux"

const initialState = {
  gifs: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case "":
      return null
   
    default:
      return state
  }
}

export const store = createStore(
  rootReducer
)
