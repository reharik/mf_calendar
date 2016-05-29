import React from 'react';
import Header from './../containers/HeaderContainer'
import Month from './../containers/MonthContainer';
import Week from './../components/Week';
import Day from './../components/Day';
import Year from './../components/Year';

export default (calendarView = 'month') => {
	var view = <Month />;
	switch (calendarView) {
		case 'week':
			view = <Week />;
			break;
		case 'day':
			view = <Day />;
			break;
		case 'year':
			view = <Year />;
			break;
	}

	return (<div className="app">
			<div className="container">
				<div className="mdl-grid">
					<div className="view mdl-cell mdl-cell--9-col mdl-cell--8-col-tablet mdl-cell--12-col-phone">
						<div className="mdl-card mdl-shadow--2dp">
							<Header />
							<div>{ view }</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

