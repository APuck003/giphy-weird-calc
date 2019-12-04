import {connect} from 'react-redux'
import {getTitle, getURL} from "../reducers/results-data"
import {GifResult} from "../components/GifResult"

export const mapStateToProps = state => ({
  title: getTitle(state),
  resultURL: getURL(state)
})

export default connect(mapStateToProps(GifResult))
