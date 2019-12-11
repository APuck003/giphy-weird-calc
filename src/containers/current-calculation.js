import {favoritesRemaining} from "../reducers/favorites-data"
import {connect} from "react-redux"
import {CurrentCalculation} from "../components/CurrentCalculation"

export const mapStateToProps = state => ({
  favsLeft: favoritesRemaining(state)
})

export default connect(mapStateToProps)(CurrentCalculation)
