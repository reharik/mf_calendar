
import React from 'react';

export default ({tasks, selectTask, view}) => {
	return (<div className="info">
		{ tasks.map((t, index)=> (<div key={index}
									   style={{width: t.width +'%',
							marginLeft: tasks.length>1 ? '0' : t.column + '%',
							backgroundColor:t.color}} onClick={() => selectTask(t, view)}>
			<div className='task'> {t.startTime.format('H:mm A')}</div>
		</div>))}
	</div>);
}


