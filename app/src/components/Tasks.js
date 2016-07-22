
import React from 'react';

export default ({tasks, selectTask, view}) => {
	return (<div className="task">
		{ tasks.map((t, index)=> (<div className="task__item" key={index}
									   style={{width: t.width +'%', height:18 * t.slots +'px',
							marginLeft: index > 0 ? '0' : t.column + '%',
							backgroundColor:t.color}} onClick={() => selectTask(t, view)}>
			<div className='task__item__display'> {t.display}</div>
		</div>))}
	</div>);
}
