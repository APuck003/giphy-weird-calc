import {searchPhrase} from "../actions/search/search-phrase"
import {GifSearchInput} from "../components/GifSearchInput"
import {connect} from "react-redux"

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    const action = searchPhrase(e.target.value)
    dispatch(action)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GifSearchInput)
