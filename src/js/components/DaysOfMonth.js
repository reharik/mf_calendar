var Tasks = require('./Tasks');
var Holiday = require('./Holiday');
var calendarActions = require('../actions/calendarActions');

var	buildClasses = function(days, today, selectedDay, displayed) {
	var classes = "day";
	if (today.isSame(day, 'day')) {
		classes += ' today';
	}

	if (selectedDay.isSame(day, 'day')) {
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
		<div key={index} className={buildClasses(today, selectedDay, displayed, index)} onClick={() => selectDay(day)} >
			<span className="num">{day.dayIndex}</span>
			<Holiday day={day} />
			<Tasks sortedTasks={sortedTasks(day.tasks)} />
		</div>
	);

	var renderWeek = (week) => (
		<div className="week">
			{ week.map(renderDay) }
		</div>
	);
	
	return (
		<div>
			{ days.map(renderWeek) }
		</div>
	);
}

