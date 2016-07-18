/**
 * Created by rharik on 5/24/16.
 */
import uuid from 'uuid';

import {increment, decrement,formatHeaderDisplay} from './../utils/calendarUtils'

import { momentFromTime } from './../utils/timeUtils';
import {CONFIGURE_CALENDAR, VIEW_CHANGED_EVENT, SELECT_DAY, SELECT_TODAY, RECEIVE_TASKS, INCREMENT_DATE, DECREMENT_DATE } from './../constants/actionConstants'

import moment from 'moment';

import {dateToMoment} from './../utils/calendarUtils'

const updateTasks = data => data.tasks.map(item => {
    return {
        category: item.category,
        content: item.content,
        help: item.help,
        moment: moment(item.date),
        time: moment(item.date).format('h:mm a'),
        hour: moment(item.date).format('h a'),
        id: item.id || uuid.v4(),
        color: item.color
    }
});

const viewChanged = (state = {view:'month'}, action = null) => {
    if (action.type === VIEW_CHANGED_EVENT) {
        return {view: action.view};
    }
    return state;
};

const displayed = (state = dateToMoment(), action = null) => {
    if (action.type === INCREMENT_DATE) {
        return increment(state, action.viewType);
    }else if(action.type === DECREMENT_DATE) {
        return decrement(state, action.viewType);
    }else if (action.type === VIEW_CHANGED_EVENT) {
        return formatHeaderDisplay(state, action.view);
    }
    return state;
};

const daySelected = (state = dateToMoment(), action = null) => {
    if (action.type === SELECT_DAY) {
        return {...state, selectedDay: action.data};
    } 
    if (action.type === SELECT_TODAY) {
        return {...state, selectedDay: action.data};
    }
    return state;
};

const recievedTasks = (state = [], action = null) => {
    if (action.type === RECEIVE_TASKS) {
        return {...state, tasks: updateTasks(action.data)};
    }
    return state;
};

const calendarConfig = (state= {}, action = null) => {
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

export default {
    calendarView: viewChanged,
    selectedDay: daySelected,
    tasks: recievedTasks,
    displayed,
    today: (state = dateToMoment()) => state,
    calendarConfig
}