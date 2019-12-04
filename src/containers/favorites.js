import {getFavorites} from "../reducers/favorites-data"
import {FavoriteGifs} from "../components/FavoriteGifs"
import {connect} from "react-redux"

export const mapStateToProps = state => ({
  likedGifs: getFavorites(state)
})

export default connect(mapStateToProps(FavoriteGifs))
