import {getRequestedGif} from "../giphy-api/giphy-api-request";
import {getSearchPhrase, getWeirdnessLevel} from "../reducers/search-data";
import {setResults} from "../actions/results/set-results";
import {getResult, handleFetchResults} from "../reducers/results-data";

export const searchThunk = async (dispatch, getState) => {
  const state = getState();
  const searchPhrase = getSearchPhrase(state);
  const weirdnessLevel = getWeirdnessLevel(state);

  if (handleFetchResults(state)) {
    try {
      dispatch(
          setResults(
              weirdnessLevel,
              getResult(true)
          )
      )
      
      const { url, title } = await getRequestedGif(searchPhrase, weirdnessLevel)
      
      dispatch(
          setResults(
              weirdnessLevel,
              getResult(false, url, title))
      );
    }
    catch(e) {
      console.log(e);
      
      dispatch(
          setResults(
              weirdnessLevel,
              getResult(false, null, null, true)
          )
      );
    }
  }
};
