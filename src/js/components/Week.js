import React from 'react';
import Tasks from'./Tasks';
import {taskStartsInTimeSlot, getHalfHoursForDay} from './../utils/timeUtils';

export default ({week, tasks, actions, config}) => {
	var timeStrings = getHalfHoursForDay(config);

	var dayByTimeElements = (week, time, index) => week.map((day, index) =>
		(<div key={index} className="week-slot" onClick={(e) => e.target === e.currentTarget ? actions.selectSlot(day.format('M/D/YYYY'), time):''}>
			<Tasks tasks={ tasksPerTime(day, time) } actions={actions} view="week" />
		</div>));

	var tasksPerTime = (day, time) => tasks.filter(x=> x.moment.isSame(day, 'day') && taskStartsInTimeSlot(x, time, config.increment));

	var weekJSX =
		(<div className="week-display">
			{timeStrings.map((time, index) =>
				<div key={index} className="time-row">
						<div className="time"><span>{time}</span></div>
						{ dayByTimeElements(week, time, index)}
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
