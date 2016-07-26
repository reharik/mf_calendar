
import React from 'react';

export default ({tasks, config, dispatch}) => {
	var selectTaskAction = (task, view) => {
		config.taskClickedAction
			? dispatch(config.taskClickedAction(task, view)) : null;
	};
	return (<div className="task">
		{ tasks.map((t, index)=> {
			return (<div className="month__task__item" key={index}
				  style={{backgroundColor:t.color}}
				  onClick={() => selectTaskAction(t, 'month')}>
				<div className='month__task__item__title' style={{ backgroundColor:t.titleColor}} >{t.title}</div>
			</div>)
		})}
	</div>);
}
