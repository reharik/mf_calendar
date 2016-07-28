import { TASK_CLICKED, OPEN_SPACE_CLICKED } from './../../app/src/index'
import { momentFromTime } from './../../app/src/utils/calendarUtils';

export default (state = {}, action = null) => {
  if (action.type === TASK_CLICKED) {
    return { id: action.id };
  } else if(action.type === OPEN_SPACE_CLICKED){
    return { startTime: momentFromTime(action.time), date: action.date };
  }
  return state;
}
