/**
 * Created by rharik on 5/26/16.
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {viewChanged, daySelected, recievedtasks, displayed, today, calendarConfig} from './viewReducer'

const reducers = combineReducers({
    routing,
    calendarView: viewChanged,
    selectedDay: daySelected,
    tasks: recievedtasks,
    today,
    calendarConfig,
    displayed
});

export default reducers;