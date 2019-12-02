import {createStore, combineReducers, applyMiddleware} from "redux"
import {searchData} from "../reducers/search-data"
import {inputData} from "../reducers/input-data"
import {resultsData} from "../reducers/results-data"
import thunk from "redux-thunk"



const rootReducer = combineReducers({
  searchData,
  inputData,
  resultsData,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
