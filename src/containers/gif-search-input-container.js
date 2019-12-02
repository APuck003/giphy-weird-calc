import {GifSearchInput} from "../components/GifSearchInput"
import {connect} from "react-redux"
import {getSearchInput} from "../reducers/input-data";
import {updateInput} from "../actions/input/update-input"

const mapStateToProps = state => ({
  phrase: getSearchInput(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    const action = updateInput(e.target.value)
    dispatch(action)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GifSearchInput)
