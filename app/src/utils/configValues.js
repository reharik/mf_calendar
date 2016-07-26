import { momentFromTime } from './../utils/calendarUtils';
import moment from 'moment';

export function updateConfigs (newConfig) {
    if (newConfig.startDay && !moment.isMoment(newConfig.startDay)) {
        newConfig.startDay = momentFromTime(newConfig.startDay);
    }
    if (newConfig.endDay && !moment.isMoment(newConfig.endDay)) {
        newConfig.endDay = momentFromTime(newConfig.endDay)
    }
    return Object.assign(config, newConfig);
}

var config = {
    defaultView: "month",
    startDay : momentFromTime("7:00 AM"),
    endDay: momentFromTime("7:00 PM"),
    increment: 30,
    color: 'blue',
    titleColor: 'darkblue',
    width: '100%'
};

export { config };