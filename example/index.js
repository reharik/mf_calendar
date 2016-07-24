import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import App from './components/App';
import moment from 'moment'
import uuid from 'uuid';


// TODO these tasks are taylored a bit because they are not getting submitted
// TODO via an action and processed by a reducer.

var momentFromTime = function(time){
	return moment.isMoment(time) ? time.clone() : moment(time, ["h:mm A"]);
};

var init = {
	// tasks: [
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:00 AM'),
	// 		endTime:	momentFromTime("9:00 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'red',
	// 		slots: 4
	// 	},
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:30 AM'),
	// 		endTime:	momentFromTime("9:30 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'blue',
	// 		slots: 4
	// 	},
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:30 AM'),
	// 		endTime:	momentFromTime("9:30 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'blue',
	// 		slots: 4
	// 	},
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:30 AM'),
	// 		endTime:	momentFromTime("9:30 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'blue',
	// 		slots: 4
	// 	},
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:30 AM'),
	// 		endTime:	momentFromTime("9:30 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'blue',
	// 		slots: 4
	// 	},
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:30 AM'),
	// 		endTime:	momentFromTime("9:30 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'blue',
	// 		slots: 4
	// 	},
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:30 AM'),
	// 		endTime:	momentFromTime("9:30 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'blue',
	// 		slots: 4
	// 	},
	// 	// {
	// 	// 	display: "fuck you!",
	// 	// 	startTime: '8:00 AM',
	// 	// 	endTime:	"9:00 AM",
	// 	// date: new Date()
	// 	// },
	// 	// {
	// 	// 	display: "fuck you!",
	// 	// 	startTime: '8:00 AM',
	// 	// 	endTime:	"9:00 AM",
	// 	// date: new Date()
	// 	// },
	// 	{
	// 		display: "fuck you!",
	// 		startTime: momentFromTime('8:00 AM'),
	// 		endTime:	momentFromTime("9:00 AM"),
	// 		date: moment(),
	// 		id: uuid.v4(),
	// 		color: 'green',
	// 		slots: 4
	// 	}
	// ]
};

const store = configureStore(init);
store.dispatch({
		type: 'RECEIVE_TASKS',
		data: {
			tasks:[
			{
				display: "fuck you!",
				startTime: '8:00 AM',
				endTime:	"9:00 AM",
				date: new Date(),
				id: uuid.v4(),
				color: 'pink',
				titleColor: 'red'
			},
				{
					display: "fuck you!",
					startTime: '8:30 AM',
					endTime:	"9:30 AM",
					date: new Date(),
					id: uuid.v4(),
					color: 'pink',
					titleColor: 'red'				},
				{
					display: "fuck you!",
					startTime: '8:30 AM',
					endTime:	"9:00 AM",
					date: new Date(),
					id: uuid.v4(),
					color: 'pink',
					titleColor: 'red'				},
				{
					display: "fuck you!",
					startTime: '9:00 AM',
					endTime:	"10:00 AM",
					date: new Date(),
					id: uuid.v4(),
					color: 'pink',
					titleColor: 'red'				}
			]
		}
		});

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>, document.getElementById('app'));

