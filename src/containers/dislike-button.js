import { connect } from "react-redux";
import { DislikeButton } from "../components/DislikeButton";
import { removeFavorite } from "../actions/favorites/remove-favorite";

export const mapDispatchToProps = dispatch => ({
  dislike: phrase => dispatch(removeFavorite(phrase))
});

export default connect(
    undefined,
    mapDispatchToProps
)(DislikeButton);
