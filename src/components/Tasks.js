import React, { PropTypes } from 'react';
import Task from './../containers/TaskSourceContainer';

const Tasks = ({tasks,
  actions,
  calendarConfig,
  connectDropTarget,
  isOver,
  canDrop}) => {

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
        actions={actions}
        calendarConfig={calendarConfig} />
    ))}
  </div>);
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default Tasks;
