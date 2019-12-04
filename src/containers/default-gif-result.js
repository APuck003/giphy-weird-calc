import {connect} from "react-redux"
import {DefaultGifResult} from "../components/DefaultGifResult"
import {handleLoading} from "../reducers/results-data"

export const mapStateToProps = state => ({
  handleLoading: handleLoading(state)
})

export default connect(mapStateToProps(DefaultGifResult))
