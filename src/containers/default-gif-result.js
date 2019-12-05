import { connect } from "react-redux";
import { DefaultGifResult } from "../components/DefaultGifResult";
import { isResultLoading } from "../reducers/results-data";

export const mapStateToProps = state => ({
  loading: isResultLoading(state)
});

export default connect(mapStateToProps)(DefaultGifResult);
