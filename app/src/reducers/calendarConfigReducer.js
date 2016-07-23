import { momentFromTime } from './../utils/calendarUtils'
import { CONFIGURE_CALENDAR } from './../constants/actionConstants'
import moment from 'moment';

export default (state= {}, action = null) => {
    if(action.type === CONFIGURE_CALENDAR){
        if(action.config.startDay && !moment.isMoment(action.config.startDay)){
            action.config.startDay = momentFromTime(action.config.startDay);
        }
        if(action.config.endDay && !moment.isMoment(action.config.endDay)){
            action.config.endDay = momentFromTime(action.config.endDay)
        }

        return Object.assign({}, state, action.config || {});
    }
    return state;
};
