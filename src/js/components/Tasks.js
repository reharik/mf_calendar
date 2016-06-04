
import React from 'react';

var sortedTasks = function(tasks) {
	return tasks.sort(function (a, b) {
		return (a.moment.isBefore(b.moment) ? -1 : 1)
	});
};

export default ({tasks, actions, view}) => (<div className="info">
			{ sortedTasks(tasks).map((t, index)=> (<div key={index}  onClick={() => actions.selectTask(t, view)}><h3 style={{height:'4.8rem'}} className='task'> {t.content}</h3></div>))}
		</div>);


