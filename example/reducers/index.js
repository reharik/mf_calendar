import { combineReducers } from 'redux';
import { calendarReducers } from '../../src/index';
import {reducer as formReducer} from 'redux-form';
import taskInProcess from './../actions/taskInProcess'

const reducers = combineReducers({
  ...calendarReducers,
  taskInProcess,
  form: formReducer
});
export default reducers;
