/**
 * Created by rharik on 5/24/16.
 */

import {VIEW_CHANGED_EVENT, SELECT_DAY, SELECT_TODAY, RECEIVE_EVENTS } from './../constants/actionConstants'

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
        return {...state, calendarButtonState: action.data};
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
    recievedEvents
}