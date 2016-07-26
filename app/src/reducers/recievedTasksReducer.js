import { normalizeTasks } from './../utils/calendarUtils'
import {   RETRIEVE_DATA_REQUEST,
    RETRIEVE_DATA_FAILURE,
    RETRIEVE_DATA_SUCCESS } from './../constants/actionConstants'

export default (state = [], action = null) => {
    if (action.type === RETRIEVE_DATA_SUCCESS) {
        var tasks;
        try {
            tasks = normalizeTasks(action.data.tasks, action.increment);
        } catch(ex) {
            // for now till I figure out how to dispatch from reducer
            throw ex;
        }
        return  [...state, ...tasks]
    }
    return state;
};
    