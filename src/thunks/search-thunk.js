import { getRequestedGif } from "../giphy-api/giphy-api-request";
import { getSearchPhrase, getWeirdnessLevel } from "../reducers/search-data";
import { setResult } from "../actions/results/set-result";
import { getResult, handleFetchResults } from "../reducers/results-data";

export const searchThunk = async (dispatch, getState) => {
  const state = getState();
  const searchTerm = getSearchPhrase(state);
  const weirdnessLevel = getWeirdnessLevel(state);
  
  if (handleFetchResults(state)) {
    try {dispatch(setResult(weirdnessLevel, getResult(true)));
      
      const { url, title } = await getRequestedGif(searchTerm, weirdnessLevel);
      dispatch(setResult(weirdnessLevel, getResult(false, url, title)));
    } catch (e) {
      console.log(e);
      dispatch(
          setResult(weirdnessLevel, getResult(false, null, null, true))
      );
    }
  }
};
