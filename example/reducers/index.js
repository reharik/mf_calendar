/**
 * Created by rharik on 5/26/16.
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import calendarReducers from '../../app/src/reducers/index'

const reducers = combineReducers({
    routing,
    ...calendarReducers
});
export default reducers;