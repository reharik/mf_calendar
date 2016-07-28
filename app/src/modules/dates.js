import moment from 'moment';

export const INCREMENT_DATE = 'INCREMENT_DATE';
export const DECREMENT_DATE = 'DECREMENT_DATE';
export const SELECT_TODAY = 'SELECT_TODAY';

export default (state = moment(), action = null) => {
  if (action.type === SELECT_TODAY) {
    return moment();
  } else if (action.type === INCREMENT_DATE) {
    //moment in moment returns a clone
    return moment(state.add(1, action.viewType));
  } else if (action.type === DECREMENT_DATE) {
    return moment(state.subtract(1, action.viewType));
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
