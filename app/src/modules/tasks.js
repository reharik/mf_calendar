import { normalizeTasks } from './../utils/calendarUtils';
import { unionWith, eqBy, prop } from 'ramda';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';

export const REMOVE_TASK_REQUEST = 'REMOVE_TASK_REQUEST';
export const REMOVE_TASK_FAILURE = 'REMOVE_TASK_FAILURE';
export const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';

export const RETRIEVE_TASKS_REQUEST = 'RETRIEVE_TASKS_REQUEST';
export const RETRIEVE_TASKS_FAILURE = 'RETRIEVE_TASKS_FAILURE';
export const RETRIEVE_TASKS_SUCCESS = 'RETRIEVE_TASKS_SUCCESS';

export default (state = [], action = null) => {
  var task;
  if (action.type === RETRIEVE_TASKS_SUCCESS) {
    let tasks;
    try {
      tasks = normalizeTasks(action.data.tasks, action.increment);
    } catch (ex) {
      // for now till I figure out how to dispatch from reducer
      throw ex;
    }

    return unionWith(eqBy(prop('id')), tasks, state);
  } else if (action.type === UPDATE_TASK_SUCCESS) {
    task = normalizeTasks([action.data.task], action.increment)[0];
    return state.splice(state.findIndex(x => x.id === task.id), 1, task);
  } else if (action.type === CREATE_TASK_SUCCESS) {
    task = normalizeTasks([action.data.task], action.increment)[0];
    state.push(task);
    return [...state];
  } else if (action.type === REMOVE_TASK_SUCCESS) {
    return state.splice(state.findIndex(x => x.id === action.data.task.id), 1);
  }
  return state;
};
