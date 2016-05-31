import React from 'react';
var calendarActions = require('../actions/calendarActions');
var DisplayHeader = require('./DisplayHeader');
var moment = require('moment');
var Tasks = require('./Tasks');
// var Occasions = require('./Occasions');

export default ({dayOfWeek, formattedDay}) => {
	return (
		<div className="day-view">
			<div className="days-header mdl-layout__header-row mdl-shadow--1dp">
				<h4>{dayOfWeek}</h4>
			</div>
			<div className="day-display">
				{ formattedDay.map((hour, index) =>
					<div key={index} className="time-row">
						<ul>
							<li className="time">{hour.time}</li>
							<li key={index}>
								{ hour.tasks.length > 0
									? <div className="info">
									<Tasks tasks={hour.tasks} />
								</div>
									: null }
							</li>
						</ul>
					</div>)}
			</div>
		</div>)
}
