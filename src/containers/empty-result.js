import {connect} from "react-redux"
import {EmptyResult} from "../components/EmptyResult"
import {handleError} from "../reducers/results-data"

export const mapStateToProps = state => ({
  handleError: handleError(state)
})

export default connect(mapStateToProps)(EmptyResult);
