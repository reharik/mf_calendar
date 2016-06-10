
import React from 'react';
import {taskTimeSlots} from './../utils/timeUtils'

var sortedTasks = function(tasks) {
	return tasks.sort(function (a, b) {
		return (a.startTime.isBefore(b.startTime) ? -1 : 1)
	});
};

export default ({tasks, actions, view}) => (<div className="info">
			{ sortedTasks(tasks).map((t, index)=> (<div key={index} style={{width: t.width +'%'}} onClick={() => actions.selectTask(t, view)}>
				<h3 style={{height:1.8 * t.slots +'rem'}} className='task'> {t.display}</h3>
			</div>))}
		</div>);


