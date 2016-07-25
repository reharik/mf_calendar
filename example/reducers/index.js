/**
 * Created by rharik on 5/26/16.
 */

import { combineReducers } from 'redux'
import  {calendarReducers } from '../../app/src/index'

console.log('==========calendarReducers=========');
console.log(calendarReducers);
console.log('==========END calendarReducers=========');

const reducers = combineReducers({
    ...calendarReducers
});
export default reducers;