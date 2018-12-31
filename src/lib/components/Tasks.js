import React from 'react';
import PropTypes from 'prop-types';
import Task from './../containers/TaskSourceContainer';
import CalendarContext from '../utils/calendarContext';

const Tasks = ({tasks,
  connectDropTarget,
  isOver,
  canDrop}) => {

  const config = useContext(CalendarContext);
  const isActive = canDrop && isOver;
  let style = {height: '100%', width: '100%'};
  let backgroundColor = 'transparent';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return connectDropTarget(<div className="redux__task__calendar__tasks" style={{ ...style, backgroundColor }}>
    {tasks.sort((a, b) => a.margin > b.margin).map((t, index) => (
      <Task
        key={index}
        task={t}
        index={index}
        increment={config.increment}
        displayTimeFormat={config.displayTimeFormat}
        updateTaskViaDND={config.updateTaskViaDND}
        canUpdate={config.canUpdate} />
    ))}
  </div>);
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool,
  canDrop: PropTypes.bool,
  calendarName: PropTypes.string.isRequired,
  taskClickedAction: PropTypes.func.isRequired,
  updateTaskViaDND: PropTypes.func.isRequired
};

export default Tasks;
