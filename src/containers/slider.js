import {connect} from 'react-redux'
import {setWeirdnessLevel} from "../actions/search/set-weirdness-level"
import {Slider} from "../components/Slider"
import {getWeirdnessLevel} from "../reducers/search-data"
import {searchThunk} from "../thunks/search-thunk"

export const mapStateToProps = state => ({
  weirdnessLevel: getWeirdnessLevel(state)
})

export const mapDispatchToProps = dispatch => ({
  onChange: num => {
    dispatch(setWeirdnessLevel(num))
    dispatch(searchThunk)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
