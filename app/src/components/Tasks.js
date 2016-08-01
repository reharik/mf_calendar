import React, { PropTypes } from 'react';
import Color from 'color';

const Tasks = ({tasks, config, dispatch}) => {
  const selectTaskAction = task => config.taskClickedAction(task.id, task, dispatch);

  /* eslint-disable new-cap */
  return (<div className="task">
		{ tasks.map((t, index)=> (<div className="task__item" key={index}
  style={{width: t.width + '%', height: 18 * t.slots + 'px',
	marginLeft: index > 0 || t.margin === 0 ? '0' : t.margin + 1 + '%', zIndex: t.column }}
  onClick={() => selectTaskAction(t)}>
  <div className="task__item__title" style={{ backgroundColor: Color(t.color).darken(0.2).hexString()}} >{t.title}</div>
  <div className="task__item__display" style={{ backgroundColor: t.color}}> {t.display}</div>
</div>)
		)}
  </div>);
};
/* eslint-enable new-cap */

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default Tasks;
