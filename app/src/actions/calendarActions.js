import {INCREMENT_DATE, DECREMENT_DATE, SELECT_TODAY, VIEW_CHANGED_EVENT } from './../constants/actionConstants'

const incrementDate = (viewType) => {
	console.log('==========viewType=========');
	console.log(viewType);
	console.log('==========END viewType=========');
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

const viewChangedEvent = (view) => {
	return {
		type: VIEW_CHANGED_EVENT,
		view
	}
};

export  {
	incrementDate,
	decrementDate,
	selectToday, 
	viewChangedEvent
}

