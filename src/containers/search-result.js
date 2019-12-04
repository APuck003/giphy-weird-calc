import {connect} from 'react-redux'
import {isResultEmpty} from "../reducers/results-data"
import {GifSearchResult} from "../components/GifSearchResult"

export const mapStateToProps = state => ({
  isResultEmpty: isResultEmpty(state)
})

export default connect(mapStateToProps(GifSearchResult))
