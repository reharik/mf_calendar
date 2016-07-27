import { momentFromTime } from './../utils/calendarUtils';
import moment from 'moment';

export function updateConfigs (newConfig) {
    if (newConfig.dayStartsAt && !moment.isMoment(newConfig.dayStartsAt)) {
        newConfig.dayStartsAt = momentFromTime(newConfig.dayStartsAt);
    }
    if (newConfig.dayEndsAt && !moment.isMoment(newConfig.dayEndsAt)) {
        newConfig.dayEndsAt = momentFromTime(newConfig.dayEndsAt)
    }
    return Object.assign(config, newConfig);
}

var config = {
    defaultView: "month",
    dayStartsAt : momentFromTime("7:00 AM"),
    dayEndsAt: momentFromTime("7:00 PM"),
    increment: 30,
    color: 'blue',
    titleColor: 'darkblue',
    width: '100%',
    retrieveDataAction: null,
    taskClickedAction: null,
    openSpaceClickedAction: null
};

export { config };