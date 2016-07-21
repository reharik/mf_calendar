import React from 'react'
import Tasks from'./Tasks';

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

export default ({days, today, selectedDay, displayed, actions}) => {

	var renderDay = (day, index) => (
		<div key={index}
			 className={buildClasses(day, today, selectedDay, displayed, index)}
			 onClick={(e) => e.target === e.currentTarget ? actions.selectSlot(day.date.format('M/D/YYYY')):''} >
			<span className="num">{day.dayIndex}</span>
			<Tasks tasks={day.tasks} actions={actions} view="month" />
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
