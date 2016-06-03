import React from 'react';
import Tasks from'./Tasks';
import {taskStartsInTimeSlot, getTimesForDay} from './../utils/timeUtils';

export default ({week, tasks, actions, config}) => {
	var timeStrings = getTimesForDay(config);

	var dayByTimeElements = (week, time, index) => week.map((day, index) =>
		(<li key={index} onClick={(e) => e.target === e.currentTarget ? actions.selectSlot(day.format('M/D/YYYY'), time):''}>
			<Tasks tasks={ tasksPerTime(day, time) } actions={actions} view="week" />
		</li>));

	var tasksPerTime = (day, time) => tasks.filter(x=> x.moment.isSame(day, 'day') && taskStartsInTimeSlot(x, time, config.increment));

	var weekJSX =
		(<div className="week-display">
			{timeStrings.map((time, index) =>
				<div key={index} className="time-row">
					<ul>
						<li className="time">{time}</li>
						{ dayByTimeElements(week, time, index)}
					</ul>
				</div>)}
		</div>);

	return (<div className="week-view">
			<div className="week days-header mdl-layout__header-row mdl-shadow--1dp">
				<ul>
					<li className="time-zone">CDT</li>
					<li>Sunday</li>
					<li>Monday</li>
					<li>Tuesday</li>
					<li>Wednesday</li>
					<li>Thursday</li>
					<li>Friday</li>
					<li>Saturday</li>
				</ul>
			</div>
			{weekJSX}
		</div>

	)
};
