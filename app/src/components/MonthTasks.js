
import React from 'react';

export default ({tasks, selectTask}) => {
	return (<div className="task">
		{ tasks.map((t, index)=> (<div className="month__task__item" key={index}
									   style={{backgroundColor:t.color}}
									   onClick={() => selectTask(t, view)}>
			<div className='task__item__display'> {t.startTime.format('H:mm A')}</div>
		</div>))}
	</div>);
}
