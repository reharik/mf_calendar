import React from 'react';
import Tasks from'./Tasks';
import {taskStartsInTimeSlot, getHalfHoursForDay} from './../utils/timeUtils';
import {determineWidthOfTask} from './../utils/taskUtils';

export default ({week, tasks, actions, config}) => {
	var timeStrings = getHalfHoursForDay(config);


	var dayByTimeElements = (week, time, index) => week.map((day, index) => {
		var clickEvent = (e) => e.target === e.currentTarget ? actions.selectSlot(day.format('M/D/YYYY'), time):'';
		var tasksForSlot = tasks.filter(task => task.date.isSame(day, 'day') && taskStartsInTimeSlot(task, time, config.increment));
		if(tasksForSlot.length>0) {
			console.log('==========slogTasks=========');
			tasksForSlot.forEach(x=> {
				console.log(JSON.stringify(x, null, 4));
			})
			console.log('==========END slogTasks=========');
		}
		return (<div key={index} className="week-slot" onClick={clickEvent} >
			<Tasks tasks={ tasksForSlot } actions={actions} view="week"/>
		</div>);
	});

	var weekJSX =
		(<div className="week-display">
			{timeStrings.map((time, index) =>
				<div key={index} className="time-row">
					<div>
						<div className="time"><span>{time}</span></div>
						{ dayByTimeElements(week, time, index)}
						</div>
				</div>)}
		</div>);

	return (<div className="week-view">
			<div className="week days-header mdl-layout__header-row mdl-shadow--1dp">
				<div>
					<div className="time-zone">CDT</div>
					<div>Sunday</div>
					<div>Monday</div>
					<div>Tuesday</div>
					<div>Wednesday</div>
					<div>Thursday</div>
					<div>Friday</div>
					<div>Saturday</div>
				</div>
			</div>
			{weekJSX}
		</div>

	)
};
