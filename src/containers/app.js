import {isFavoritesRemaining} from "../reducers/favorites-data";
import {App} from "../components/App";
import {connect} from "react-redux";

export const mapStateToProps = state => ({
  isFavoritesRemaining: isFavoritesRemaining(state)
});

export default connect(mapStateToProps)(App);
