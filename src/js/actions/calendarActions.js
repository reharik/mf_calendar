import {INCREMENT_MONTH, DECREMENT_MONTH, SELECT_TODAY, SELECT_DAY, VIEW_CHANGED_EVENT } from './../constants/actionConstants'

const incrementMonth = () => {
	return {
		type: INCREMENT_MONTH
	}
};

const decrementMonth = () => {
	return {
		type: DECREMENT_MONTH
	}
};

const selectToday = () => {
	return {
		type: SELECT_TODAY
	}
};

const selectDay = (date) => {
	return {
		type: SELECT_DAY,
		date: date
	}
};

const 	viewChangedEvent = (view) => {
	return {
		type: VIEW_CHANGED_EVENT,
		view
	}
};

export  {
	incrementMonth,
	decrementMonth,
	selectDay,
	selectToday, 
	viewChangedEvent
}

