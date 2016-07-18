import React from 'react';
import DaysOfMonth from './DaysOfMonth';

export default  ({displayed, today, days, selectedDay, incrementMonth, decrementMonth, actions}) => (
		<div className="month-view">
			<div className="month days-header mdl-layout__header-row mdl-shadow--1dp">
				<div>
					<div>Sunday</div>
					<div>Monday</div>
					<div>Tuesday</div>
					<div>Wednesday</div>
					<div>Thursday</div>
					<div>Friday</div>
					<div>Saturday</div>
				</div>
			</div>
			<DaysOfMonth today={today} displayed={displayed} days={days} selectedDay={selectedDay} actions={actions}/>
		</div>
);

