import { combineReducers } from 'redux';
import { calendarReducers } from '../../app/src/index';

const reducers = combineReducers({
  ...calendarReducers
});
export default reducers;
