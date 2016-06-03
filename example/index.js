import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './components/App';
import moment from 'moment'

import './../src/sass/app.scss'
// import './sass/app.css'
// import './sass/external-app.css'
import './../src/sass/material.min.css'
var init = {
	tasks: [
		{
			content: "fuck you!",
			startTime: '8:00 AM',
			moment: moment()
		},
		{
			content: "fuck you!",
			startTime: '8:00 AM',
			moment: moment()
		},
		{
			content: "fuck you!",
			startTime: '8:00 AM',
			moment: moment()
		},
		{
			content: "fuck you!",
			startTime: '8:00 AM',
			moment: moment()
		},
		{
			content: "fuck you!",
			startTime: '8:00 AM',
			moment: moment()
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

