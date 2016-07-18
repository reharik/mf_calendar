import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './components/App';
import moment from 'moment'
import uuid from 'uuid';

// import '../app/sass/app.scss'
// import './sass/app.css'
// import './sass/external-app.css'
// import '../app/sass/material.min.css'
var init = {
	tasks: [
		{
			display: "fuck you!",
			startTime: '8:00 AM',
			endTime:	"9:00 AM",
			date: new Date().toISOString(),
			id: uuid.v4(),
			color: 'red'
		},
		{
			display: "fuck you!",
			startTime: '8:30 AM',
			endTime:	"9:30 AM",
			date: new Date().toISOString(),
			id: uuid.v4(),
			color: 'blue'
		},
		// {
		// 	display: "fuck you!",
		// 	startTime: '8:00 AM',
		// 	endTime:	"9:00 AM",
		// date: new Date()
		// },
		// {
		// 	display: "fuck you!",
		// 	startTime: '8:00 AM',
		// 	endTime:	"9:00 AM",
		// date: new Date()
		// },
		{
			display: "fuck you!",
			startTime: '8:00 AM',
			endTime:	"9:00 AM",
			date: new Date().toISOString(),
			id: uuid.v4(),
			color: 'green'
		}
	]
};

const store = configureStore(init);
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>, document.getElementById('app'));

