import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

var Calendar = require('./js/components/Calendar');
var Month = require('./js/containers/MonthContainer');
var Week = require('./js/components/Week');
var Day = require('./js/components/Day');
var Year = require('../js/components/ear');

render(
	<Router history={new HashHistory}>
		<Route path="/" component={Calendar}>
			<Route path="month" component={Month}/>
			<Route path="week" component={Week}/>
			<Route path="day" component={Day}/>
			<Route path="year" component={Year}/>
		</Route>
	</Router>, document.getElementById('app'));

