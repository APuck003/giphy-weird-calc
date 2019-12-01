import {createStore, combineReducers} from "redux"
import {searchData} from "../reducers/search-data"

const rootReducer = combineReducers({searchData})

export const store = createStore(
  rootReducer
)
