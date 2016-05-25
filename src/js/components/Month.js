import React from 'react';
var DaysOfMonth = require('./DaysOfMonth');
var DisplayHeader = require('./DisplayHeader');

var Month = ({displayed, today, days, selectedDay, incrementMonth, decrementMonth, selectDay}) => (
	<div>
		<div className="month-view">
			<DisplayHeader caption={displayed.month + ' ' + displayed.year} increment={incrementMonth} decrement={decrementMonth} />
			<div className="days-header mdl-layout__header-row mdl-shadow--1dp">
				<ul>
					<li>Sunday</li>
					<li>Monday</li>
					<li>Tuesday</li>
					<li>Wednesday</li>
					<li>Thursday</li>
					<li>Friday</li>
					<li>Saturday</li>
				</ul>
			</div>
			<DaysOfMonth today={today} displayed={displayed} days={days} selectedDay={selectedDay} selectDay={selectDay}/>
		</div>
	</div>
);

module.exports = Month;