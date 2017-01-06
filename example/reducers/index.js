import { combineReducers } from 'redux';
import { reduxTaskCalendar } from '../../src/index';
import {reducer as formReducer} from 'redux-form';
import taskInProcess from './../actions/taskInProcess'

const reducers = combineReducers({
  reduxTaskCalendar,
  taskInProcess,
  form: formReducer
});
export default reducers;
