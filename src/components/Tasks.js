import React, { PropTypes } from 'react';
import Task from './../containers/TaskSourceContainer';

const Tasks = ({tasks,
  calendarName,
  connectDropTarget,
  isOver,
  canDrop,
  taskClickedAction,
  updateTaskViaDND}) => {

  const isActive = canDrop && isOver;
  let style = {height: '100%', width: '100%'};
  let backgroundColor = 'transparent';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return connectDropTarget(<div className="redux__task__calendar__tasks" style={{ ...style, backgroundColor }}>
    {tasks.sort((a, b) => a.margin > b.margin).map((t, index)=> (
      <Task
        key={index}
        task={t}
        index={index}
        taskClickedAction={taskClickedAction}
        calendarName={calendarName}
        updateTaskViaDND={updateTaskViaDND}/>
    ))}
  </div>);
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  calendarName: PropTypes.string.isRequired,
  taskClickedAction: PropTypes.func.isRequired,
  updateTaskViaDND: PropTypes.func.isRequired
};

export default Tasks;
