import {GifSearchResult} from "../components/GifSearchResult"
import {isResultEmpty} from "../reducers/results-data";
import {connect} from "react-redux";

export const mapStateToProps = state => ({
  isResultEmpty: isResultEmpty(state)
});

export default connect(mapStateToProps)(GifSearchResult);
