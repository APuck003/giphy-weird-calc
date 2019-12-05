import {handleGifLikes} from "../reducers/favorites-data"
import {likeThunk} from "../thunks/like-thunk"
import {connect} from 'react-redux'
import {LikeButton} from "../components/LikeButton"

export const mapStateToProps = state => ({
  handleGifLikes: handleGifLikes(state)
})

export const mapDispatchToProps = dispatch => ({
  likeThunk: () => dispatch(likeThunk)
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)
