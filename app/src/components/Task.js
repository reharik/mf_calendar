import React, { PropTypes } from 'react';
import Color from 'color';

const styleTaskItem = (t, index, opacity) => ({width: t.width + '%',
  height: 18 * t.slots + 'px',
  marginLeft: index > 0 || t.margin === 0 ? '0' : t.margin + 1 + '%',
  zIndex: t.column,
  border: '2px solid ' + Color(t.color).darken(0.3).hexString(), //eslint-disable-line new-cap
  opacity
});

const styleTaskItemTitle = t =>
  ({ backgroundColor: Color(t.color).darken(0.2).hexString() }); //eslint-disable-line new-cap


const Task = ({task, index, config, dispatch, isDragging, connectDragSource }) => {

  const selectTaskAction = t => config.taskClickedAction(t.id, t, dispatch);
  const opacity = isDragging ? 0.4 : 1;

  return (connectDragSource(<div className="task__item"
    style={styleTaskItem(task, index, opacity)}
    onClick={() => selectTaskAction(task)}>
    <div className="task__item__title" style={styleTaskItemTitle(task)} >{task.title}</div>
    <div className="task__item__display" style={{ backgroundColor: task.color}}> {task.display}</div>
  </div>));
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default Task;
