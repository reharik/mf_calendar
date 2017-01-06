import moment from 'moment';

export const INCREMENT_DATE = 'calendar/dates/INCREMENT_DATE';
export const DECREMENT_DATE = 'calendar/dates/DECREMENT_DATE';
export const SELECT_TODAY = 'calendar/dates/SELECT_TODAY';

export default (state = {}, action = null) => {
  const thisState = state[action.config.calendarName];  

  if (action.type === SELECT_TODAY) {
    return {...thisState,
      date: moment()};
  } else if (action.type === INCREMENT_DATE) {
    //moment in moment returns a clone
    return {...thisState,
      date: moment(thisState.date.add(1, action.viewType))};
  } else if (action.type === DECREMENT_DATE) {
    return {...thisState,
      date: moment(thisState.subtract(1, action.viewType))};
  }
  return state;
};


export function incrementDate(viewType) {
  return {
    type: INCREMENT_DATE,
    viewType
  };
}

export function decrementDate(viewType) {
  return {
    type: DECREMENT_DATE,
    viewType
  };
}

export function selectToday() {
  return {
    type: SELECT_TODAY
  };
}
