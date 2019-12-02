import {GifSearchInput} from "../components/GifSearchInput"
import {connect} from "react-redux"
import {updateInput} from "../actions/input/update-input"
import {getSearchInput, handleEmptySearch} from "../reducers/input-data";
import {clearResults} from "../actions/clear-results";
import {submit} from "../thunks/submit-thunk"

const mapStateToProps = state => ({
  phrase: getSearchInput(state),
  handleEmptySearch: handleEmptySearch(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    const action = updateInput(e.target.value)
    dispatch(action)
  },
  search: () => {
    dispatch(clearResults())
    dispatch(submit)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GifSearchInput)
