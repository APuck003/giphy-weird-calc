import {connect} from 'react-redux'
import {clearResults} from '../actions/results/clear-results'
import {emptyFavorites} from '../actions/favorites/empty-favorites'
import {clearSearch} from '../actions/search/clear-search'
import {clearInput} from '../actions/input/clear-input'
import StartOverButton from '../components/StartOverButton'

export const mapDispatchToProps = dispatch => ({
  startOver: () => {
    dispatch(clearResults())
    dispatch(clearSearch())
    dispatch(clearInput())
    dispatch(emptyFavorites())
  }
})

export default connect(undefined, mapDispatchToProps)(StartOverButton)
