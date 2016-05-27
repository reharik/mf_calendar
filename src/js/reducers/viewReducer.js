/**
 * Created by rharik on 5/24/16.
 */

import {increment, decrement,formatDisplay} from './../utils/calendarUtils'

import {VIEW_CHANGED_EVENT, SELECT_DAY, SELECT_TODAY, RECEIVE_EVENTS, INCREMENT_DATE, DECREMENT_DATE } from './../constants/actionConstants'

const updateEvents = data => data.events.map(item => {
    return {
        category: item.category,
        content: item.content,
        help: item.help,
        moment: moment(item.date),
        time: moment(item.date).format('h:mm a'),
        hour: moment(item.date).format('h a')
    }
});

const viewChanged = (state = {}, action = null) => {
    if (action.type === VIEW_CHANGED_EVENT) {
        return action.view;
    }
    return state;
};

const displayed = (state = {}, action = null) => {
    if (action.type === INCREMENT_DATE) {
        return increment(state, action.viewType);
    }else if(action.type === DECREMENT_DATE) {
        return decrement(state, action.viewType);
    }else if (action.type === VIEW_CHANGED_EVENT) {
        return formatDisplay(state, action.view);
    }
    return state;
};

const daySelected = (state = {}, action = null) => {
    if (action.type === SELECT_DAY) {
        return {...state, selectedDay: action.data};
    } 
    if (action.type === SELECT_TODAY) {
        return {...state, selectedDay: action.data};
    }
    return state;
};

const recievedEvents = (state = {}, action = null) => {
    if (action.type === RECEIVE_EVENTS) {
        return {...state, events: updateEvents(action.data)};
    }
    return state;
};

export {
    viewChanged,
    daySelected,
    recievedEvents,
    displayed
}