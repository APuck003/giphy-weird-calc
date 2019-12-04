import {favoritesRemaining} from "../reducers/favorites-data"
import {connect} from "react-redux"
import {CalculateWrapper} from "../components/CalculateWrapper"

export const mapStateToProps = state => ({
  favoritesRemaining: favoritesRemaining(state)
})

export default connect(mapStateToProps(CalculateWrapper))
