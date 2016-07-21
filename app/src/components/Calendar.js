import React from 'react';
import Header from './../containers/HeaderContainer'
import Month from './../containers/MonthContainer';
import Week from './../components/Week';
import Day from './../components/Day';

export default ({calendarView}) => {
	var view = <Month />;
	switch (calendarView.view) {
		case 'week':
			view = <Week />;
			break;
		case 'day':
			view = <Day />;
			break;
	}
	return (<div className="calendar">
		<Header />
		<div className="calendar__display__view">
			{ view }
		</div>
	</div>);
}

