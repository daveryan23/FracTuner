import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

import UndoRedo from '../components/UndoRedo'

const mapStateToProps = state => ({
  canUndo: state.past.length > 0,
  canRedo: state.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)
