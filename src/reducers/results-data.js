// import produce from "immer"
// import {SET_RESULT, CLEAR_RESULTS} from "../actions"
// import {getSearchPhrase, getWeirdnessLevel} from "./search-data"
// import {createSelector} from "reselect"
//
// export const getResult = (
//     url = null,
//     title = null || [''].join(''),
//     didError = false,
//     loading = false
// ) => ({url, title, didError, loading})
//
// export const defaultState = {
//   data: {
//     0: getResult(),
//     1: getResult(),
//     2: getResult(),
//     3: getResult(),
//     4: getResult(),
//     5: getResult(),
//     6: getResult(),
//     7: getResult(),
//     8: getResult(),
//     9: getResult(),
//     10: getResult()
//   }
// };
//
// export const resultsData = (state = defaultState, action) => {
//   return produce(state, draftState => {
//     switch (action.type) {
//       case SET_RESULT: {
//         const { weirdnessLevel, result } = action.payload;
//         draftState.data[weirdnessLevel] = result;
//         return draftState;
//       }
//       case CLEAR_RESULTS: {
//         draftState = defaultState;
//         return draftState;
//       }
//       default: {
//         return state;
//       }
//     }
//   })
// }
//
//
// export const getResults = state => state.resultsData.data
//
// export const getWeirdNumResult = createSelector(
//     getResults,
//     getWeirdnessLevel,
//     (results, weirdnessLevel) => results[weirdnessLevel]
// );
//
// export const handleFetchResults = createSelector(
//     getWeirdNumResult,
//     getSearchPhrase,
//     (result, submittedPhrase) => result.loading === false && result.url === null && submittedPhrase.length > 0
// )
//
// export const getURL = createSelector(
//     getWeirdNumResult,
//     result => result.url
// );
//
// export const getTitle = createSelector(
//     getWeirdNumResult,
//     // result => result.title
//     result => shorten(result.title)
// );
//
// export const isResultEmpty = createSelector(
//     getURL,
//     url => {
//       return url === null;
//     }
// );
//
// export const handleError = createSelector(
//     getWeirdNumResult,
//     result => result.didError
// );
//
// export const isResultLoading = createSelector(
//     getWeirdNumResult,
//     result => result.loading
// );
//
// const shorten = title => {
//   if (typeof title === title.toString() && title.length > 25) {
//     let shorter = title.substr(0, 25)
//     let end = shorter.lastIndexOf(' ')
//     return end === -1 ? shorter : shorter.substr(0, end)
//   }
//   return title
// }


import produce from "immer"
import {SET_RESULT, CLEAR_RESULTS} from "../actions"
import {getSearchPhrase, getWeirdnessLevel} from "./search-data"
import {createSelector} from "reselect"

export const getResult = (url = null, title = null, didError = false, loading = false) => ({
  url,
  title,
  didError,
  loading
})

export const defaultState = {
  data: {
    0: getResult(),
    1: getResult(),
    2: getResult(),
    3: getResult(),
    4: getResult(),
    5: getResult(),
    6: getResult(),
    7: getResult(),
    8: getResult(),
    9: getResult(),
    10: getResult()
  }
};

export const resultsData = (state = defaultState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case SET_RESULT: {
        const { weirdnessLevel, result } = action.payload;
        draftState.data[weirdnessLevel] = result;
        return draftState;
      }
      case CLEAR_RESULTS: {
        draftState = defaultState;
        return draftState;
      }
      default: {
        return state;
      }
    }
  })
}



export const getResults = state => state.resultsData.data

export const getWeirdNumResult = createSelector(
    getResults,
    getWeirdnessLevel,
    (results, weirdnessLevel) => results[weirdnessLevel]
);

export const handleFetchResults = createSelector(
    getWeirdNumResult,
    getSearchPhrase,
    (result, submittedPhrase) => result.loading === false && result.url === null && submittedPhrase.length > 0
)

export const getURL = createSelector(
    getWeirdNumResult,
    result => result.url
);

export const getTitle = createSelector(
    getWeirdNumResult,
    // result => result.title
    result => shorten(result.title)
);

export const isResultEmpty = createSelector(
    getURL,
    url => {
      return url === null;
    }
);

export const handleError = createSelector(
    getWeirdNumResult,
    result => result.didError
);

export const isResultLoading = createSelector(
    getWeirdNumResult,
    result => result.loading
);

export const shorten = title => {
  // if (title.length > 25) {
  //   title = title.slice(0, 25)
  // }
  // return title;
  
  if (title == null) {
    return String(title)
  } else if (title.length > 25) {
    let shorter = title.substr(0, 25)
    let end = shorter.lastIndexOf(" ")
    return end === -1 ? shorter : shorter.substr(0, end)
  }
  return title
}
