import {isTermLikeable} from "../reducers/favorites-data"
import {likeThunk} from "../thunks/like-thunk"
import {connect} from 'react-redux'
import {LikeButton} from "../components/LikeButton"

export const mapStateToProps = state => ({
  isTermLikeable: isTermLikeable(state)
})

export const mapDispatchToProps = dispatch => ({
  addFavoriteThunk: () => dispatch(likeThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)
