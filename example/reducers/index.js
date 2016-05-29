/**
 * Created by rharik on 5/26/16.
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import calendarReducers from './../../src/js/reducers/viewReducer'

// var calReducers = calendarReducers();
console.log(calendarReducers);

const reducers = combineReducers({
    routing,
    ...calendarReducers

});

export default reducers;