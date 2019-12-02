import {setGifSearchPhrase} from "../actions/set-gif-search-phrase"
import {GifSearchInput} from "../components/GifSearchInput"
import {connect} from "react-redux"

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    const action = setGifSearchPhrase(e.target.value)
    dispatch(action)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GifSearchInput)
