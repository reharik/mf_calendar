var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var calendarActions = {
	selectDay: function(day) {
		AppDispatcher.dispatch({
			actionType: appConstants.ActionTypes.SELECT_DAY,
			data: day
		});
	},
	receiveEvents: function(json, errors) {
		AppDispatcher.dispatch({
			actionType: appConstants.ActionTypes.RECEIVE_EVENTS,
			json: json,
			errors: errors
		})
	},
	changeDisplay: function(day) {
		AppDispatcher.dispatch({
			actionType: appConstants.ActionTypes.CHANGE_DISPLAY,
			data: day
		});
	},
	changeButton: function(selection) {
		AppDispatcher.dispatch({
			actionType: appConstants.ActionTypes.CHANGE_BUTTON,
			data: selection
		});
	}
};

module.exports = calendarActions;