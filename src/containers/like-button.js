import {isTermLikeable} from "../reducers/favorites-data"
import {addFavoriteThunk} from "../thunks/add-favorite-thunk"
import {connect} from 'react-redux'
import {LikeButton} from "../components/LikeButton"

export const mapStateToProps = state => ({
  isTermLikeable: isTermLikeable(state)
})

export const mapDispatchToProps = dispatch => ({
  addFavoriteThunk: () => dispatch(addFavoriteThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)
