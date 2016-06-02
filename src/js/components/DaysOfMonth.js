import React from 'react'
import Tasks from'./Tasks';
import calendarActions from '../actions/calendarActions';

var	buildClasses = function(day, today, selectedDay, displayed, index) {
	var classes = "day";
	if (today.date.isSame(day, 'day')) {
		classes += ' today';
	}

	if (selectedDay.date.isSame(day, 'day')) {
		classes += ' selected';
	}
	if ((index + 1) % 7 == 0) {
		classes += ' last';
	}

	if (day.month != displayed.month) {
		classes += ' other-month';
	}
	return classes;
};

var sortedTasks = function(tasks) {
	return tasks.sort(function (a, b) {
		return (a.moment.isBefore(b.moment) ? -1 : 1)
	});
};

export default ({days, today, selectedDay, displayed, selectDay}) => {
	
	var renderDay = (day, index) => (
		<div key={index} className={buildClasses(day, today, selectedDay, displayed, index)} onClick={() => selectDay(day)} >
			<span className="num">{day.dayIndex}</span>
			<Tasks tasks={day.tasks} />
		</div>
	);

	var renderWeek = (week, index) => (
		<div className="week" key={index}>
			{ week.map(renderDay) }
		</div>
	);
	
	return (
		<div>
			{ days.map(renderWeek) }
		</div>
	);
}

