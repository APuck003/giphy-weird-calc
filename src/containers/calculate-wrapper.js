import { connect } from "react-redux";
import { isFavoritesRemaining } from "../reducers/favorites-data";
import CalculateWrapper from '../components/CalculateWrapper'

export const mapStateToProps = state => ({
  isFavoritesRemaining: isFavoritesRemaining(state)
});

export default connect(mapStateToProps)(CalculateWrapper);
