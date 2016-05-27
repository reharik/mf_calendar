import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './js/store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import {dateToMoment} from './js/utils/calendarUtils'
import { Provider } from 'react-redux'
import Calendar from './js/components/Calendar';
import Month from './js/containers/MonthContainer';
import Week from './js/components/Week';
import Day from './js/components/Day';
import Year from './js/components/Year';

import './sass/app.scss'
// import './sass/app.css'
// import './sass/external-app.css'
import './sass/material.min.css'

const initialState = {
	// today is set when app loads and does not change
	today: dateToMoment(),
	// display is the date information that is currently displayed in the calendar view, and is updated via user interaction
	// we initially set displayed to match today's date so that calendar can render before API returns data
	displayed: dateToMoment(),
	// selected is the current user selected day. On initial state it is set to today. Selected day is the day displayed in the task card.
	selectedDay: dateToMoment(),
	// Button bar is the navigation bar on the top of the calendar. Each property controls whether a specific button has an "active" style applied.
	calendarButtonState: 'month',
	events: []
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);



render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Calendar}>
				<Route path="month" component={Month}/>
				<Route path="week" component={Week}/>
				<Route path="day" component={Day}/>
				<Route path="year" component={Year}/>
			</Route>
		</Router>
	</Provider>, document.getElementById('app'));

