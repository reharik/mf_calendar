import { combineReducers } from 'redux';
import { calendarReducers } from '../../app/src/index';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  ...calendarReducers,
  form: formReducer
});
export default reducers;
