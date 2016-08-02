import React, { PropTypes } from 'react';
import Task from './../containers/TaskSourceContainer';

const Tasks = ({tasks, config, dispatch,
  connectDropTarget,
  isOver,
  canDrop}) => {

  const isActive = canDrop && isOver;
  let style = { height: '100%', width: '100%' };
  let backgroundColor = 'transparent';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return connectDropTarget(<div className="tasks" style={{ ...style, backgroundColor }} >
		{tasks.sort((a, b) => a.margin > b.margin).map((t, index)=> (
  <Task
    task={t}
    index={index}
    config={config}
    dispatch={dispatch} />
      ))}
  </div>);
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default Tasks;
