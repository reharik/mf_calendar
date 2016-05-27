/**
 * Created by rharik on 5/26/16.
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {viewChanged, daySelected, recievedEvents} from './viewReducer'

const reducers = combineReducers({
    routing,
    calendarButtonState: viewChanged,
    selectedDay: daySelected,
    events: recievedEvents,
    today: (state = {}) => state ,
    displayed: (state = {}) => state

});

export default reducers;