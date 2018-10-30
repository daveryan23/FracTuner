import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
)

const mapStateToProps = (state) => ({
  canUndo: state.past.length > 0,
  canRedo: state.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

const UndoRedoC = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedoC