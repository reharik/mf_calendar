import React from 'react';
import Tasks from'./Tasks';


export default ({formattedDay, actions}) => {
	return (
		<div className="day-view">
			<div className="days-header mdl-layout__header-row mdl-shadow--1dp">
				<h4>{formattedDay.dayName}</h4>
			</div>
			<div className="day-display">
				{ formattedDay.map((hour, index) =>
					<div key={index} className="time-row">
						<div>
							<div className="time"><span>{hour.time.indexOf('00') > 0 || hour.time.indexOf('30') > 0 ? hour.time : ''}</span></div>
							<div className="slot" onClick={(e) => e.target === e.currentTarget ? actions.selectSlot(hour.moment.format('M/D/YYYY'), hour.time) : ''}>
								{ hour.tasks.length > 0
									?  <Tasks tasks={hour.tasks} actions={actions} view="day"  />
									: null }
							</div>
						</div>
					</div>)}
			</div>
		</div>)
}
