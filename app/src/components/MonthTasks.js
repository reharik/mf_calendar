import React, { PropTypes } from 'react';

const MonthTasks = ({tasks, config, dispatch}) => {
  const selectTaskAction = task => config.taskClickedAction(task, dispatch);

  return (<div className="task">
      { tasks.map((t, index)=> { return (<div className="month__task__item" key={index}
        style={{backgroundColor: t.color}}
        onClick={() => selectTaskAction(t)}>
        <div className="month__task__item__title" style={{ backgroundColor: t.titleColor}} >{t.title}</div>
      </div>);
      })}
  </div>);
};

MonthTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default MonthTasks;
