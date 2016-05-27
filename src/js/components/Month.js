import React from 'react';
import DaysOfMonth from './DaysOfMonth';

export default  ({displayed, today, days, selectedDay, incrementMonth, decrementMonth, selectDay}) => (
		<div className="month-view">
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
);

