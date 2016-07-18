import React from 'react';
import Header from './../containers/HeaderContainer'
import Month from './../containers/MonthContainer';
import Week from './../containers/WeekContainer';
import Day from './../containers/DayContainer';

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
	return (<div className="app">
		<Header />
		<div>{ view }</div>
	</div>);
}

