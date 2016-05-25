import React from 'react';
var moment = require('moment-holidays');
var calendarStore = require('../stores/calendarStore');
var calendarActions = require('../actions/calendarActions');
var Calendar = require('node-calendar');
var View = require('./Calendar');
import {dateToMoment} from './../utils/calendarUtils';

var Cal = React.createClass({

	render: function() {
		var calendar = new Calendar.Calendar(Calendar.SUNDAY);

		// Create the array for the months, and format events to match the currently displayed month


// THIS IS WHERE THE MONTH DATA GETS SET
		var calArray = calendar.monthdatescalendar(this.state.displayed.year, this.state.displayed.monthIndex);

		var month = calArray.map(function (item) {
			return item.map(dateToMoment);
		}).map(function (week) {
			return week.map(function (date) {
				date.matchedEvents = this.state.events.filter(function (fe) {
					return fe.moment.format('MMMM D YYYY') == date.date.format('MMMM D YYYY');
				});
				return date;
			});
		});

		// var view = React.cloneElement(this.props.children, {today: this.state.today, displayed: this.state.displayed, selectedDay: this.state.selectedDay, search: this.state.search, month: newDays, buttonState: this.state.buttonState, events: this.state.events, filter: this.state.filter});

		// return ({children})
		return <div className="container">
			<div className="mdl-grid">
				<div className="view mdl-cell mdl-cell--9-col mdl-cell--8-col-tablet mdl-cell--12-col-phone">
					{this.props.children}
				</div>
			</div>
		</div>

	}
});


module.exports = Cal;