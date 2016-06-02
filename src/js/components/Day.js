import React from 'react';
import Tasks from'./Tasks';
import calendarActions from '../actions/calendarActions';


export default ({formattedDay}) => {
	return (
		<div className="day-view">
			<div className="days-header mdl-layout__header-row mdl-shadow--1dp">
				<h4>{formattedDay.dayName}</h4>
			</div>
			<div className="day-display">
				{ formattedDay.map((hour, index) =>
					<div key={index} className="time-row">
						<ul>
							<li className="time">{hour.time}</li>
							<li >
								{ hour.tasks.length > 0
									?  <Tasks tasks={hour.tasks} />
									: null }
							</li>
						</ul>
					</div>)}
			</div>
		</div>)
}
