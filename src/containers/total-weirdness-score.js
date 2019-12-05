import {connect} from 'react-redux'
import {getWeirdScore} from "../reducers/favorites-data"
import {TotalWeirdnessScore} from '../components/TotalWeirdnessScore'

export const mapStateToProps = state => ({
  score: getWeirdScore(state)
})

export default connect(mapStateToProps(TotalWeirdnessScore))
