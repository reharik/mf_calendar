import { normalizeTasks } from './../utils/calendarUtils';
import { RETRIEVE_DATA_SUCCESS,
  UPDATE_TASK,
  REMOVE_TASK,
  CREATE_TASK } from './../constants/actionConstants';
import { unionWith, eqBy, prop } from 'ramda';

export default (state = [], action = null) => {
  if (action.type === RETRIEVE_DATA_SUCCESS) {
    let tasks;
    try {
      tasks = normalizeTasks(action.data.tasks, action.increment);
    } catch (ex) {
      // for now till I figure out how to dispatch from reducer
      throw ex;
    }

    return unionWith(eqBy(prop('id')), tasks, state);
  } else if (action.type === UPDATE_TASK) {
    return Object.extend({}, state.splice(state.findIndex(x => x.id === action.data.task.id), 1, action.data.task));
  } else if (action.type === REMOVE_TASK) {
    return Object.extend({}, state.splice(state.findIndex(x => x.id === action.data.task.id), 1));
  } else if (action.type === CREATE_TASK) {
    return Object.extend({}, state.push(action.data.task));
  }

  return state;
};
