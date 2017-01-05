import React, { PropTypes } from 'react';

const MonthTasks = ({tasks, actions}) => {
  const selectTaskAction = task => actions.taskClickedAction(task.id, task);

  return (<div className="redux__task__calendar__month__task">
      { tasks.map((t, index)=> { return (<div className="redux__task__calendar__month__task__item" key={index}
        style={{backgroundColor: t.color}}
        onClick={() => selectTaskAction(t)}>
        <div className="redux__task__calendar__month__task__item__title" style={{ backgroundColor: t.titleColor}} >{t.title}</div>
      </div>);
      })}
  </div>);
};

MonthTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MonthTasks;
