import React, { PropTypes } from 'react';
import Color from 'color';

const Tasks = ({tasks, config, dispatch}) => {
  const styleTaskItem = (t, index) => ({width: t.width + '%',
    height: 18 * t.slots + 'px',
    marginLeft: index > 0 || t.margin === 0 ? '0' : t.margin + 1 + '%',
    zIndex: t.column,
    border: '2px solid ' + Color(t.color).darken(0.3).hexString()  //eslint-disable-line new-cap
  });

  const styleTaskItemTitle = t =>
    ({ backgroundColor: Color(t.color).darken(0.2).hexString() }); //eslint-disable-line new-cap

  const selectTaskAction = task => config.taskClickedAction(task.id, task, dispatch);

  return (<div className="redux__task__calendar__task">
		{ tasks.sort((a, b) => a.margin > b.margin).map((t, index)=> (<div className="redux__task__calendar__task__item" key={index}
  style={styleTaskItem(t, index)}
  onClick={() => selectTaskAction(t)}>
  <div className="redux__task__calendar__task__item__title" style={styleTaskItemTitle(t)} >{t.title}</div>
  <div className="redux__task__calendar__task__item__display" style={{ backgroundColor: t.color}}> {t.display}</div>
</div>)
		)}
  </div>);
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default Tasks;
