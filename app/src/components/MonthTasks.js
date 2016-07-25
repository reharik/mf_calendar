
import React from 'react';

export default ({tasks, selectTask}) => {
	return (<div className="task">
		{ tasks.map((t, index)=> {
			return (<div className="month__task__item" key={index}
				  style={{backgroundColor:t.color}}
				  onClick={() => selectTask(t, view)}>
				<div className='month__task__item__title' style={{ backgroundColor:t.titleColor}} >{t.title}</div>
			</div>)
		})}
	</div>);
}
