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


const Task = ({task, index, actions, isDragging, connectDragSource }) => {
  const selectTaskAction = t => actions.taskClickedAction(t.id, t);
  const opacity = isDragging ? 0.4 : 1;

  return (connectDragSource(<div className="redux__task__calendar__task__item"
    style={styleTaskItem(task, index, opacity)}
    onClick={() => selectTaskAction(task)}>
    <div className="redux__task__calendar__task__item__title" style={styleTaskItemTitle(task)} >{task.title}</div>
    <div className="redux__task__calendar__task__item__display" style={{ backgroundColor: task.color}}> {task.display}</div>
  </div>));
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default Task;
