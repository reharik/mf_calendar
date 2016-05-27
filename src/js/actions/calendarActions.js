import {INCREMENT_DATE, DECREMENT_DATE, SELECT_TODAY, SELECT_DAY, VIEW_CHANGED_EVENT } from './../constants/actionConstants'

const incrementDate = (viewType) => {
	return {
		type: INCREMENT_DATE,
		viewType
	}
};

const decrementDate = (viewType) => {
	return {
		type: DECREMENT_DATE,
		viewType
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
	incrementDate,
	decrementDate,
	selectDay,
	selectToday, 
	viewChangedEvent
}

