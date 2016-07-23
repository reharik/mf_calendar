import { normalizeTasks } from './../utils/calendarUtils'
import { RECEIVE_TASKS } from './../constants/actionConstants'

export default (state = [], action = null) => {
    if (action.type === RECEIVE_TASKS) {
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
