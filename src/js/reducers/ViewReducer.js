/**
 * Created by rharik on 5/24/16.
 */

import {dateToMoement} from './../utils/calendarUtils'

const initialState = {
    // today is set when app loads and does not change
    today: dateToMoement(),
    // display is the date information that is currently displayed in the calendar view, and is updated via user interaction
    // we initially set displayed to match today's date so that calendar can render before API returns data
    displayed: dateToMoement(),
    // selected is the current user selected day. On initial state it is set to today. Selected day is the day displayed in the task card.
    selectedDay: dateToMoement(),
    // Button bar is the navigation bar on the top of the calendar. Each property controls whether a specific button has an "active" style applied.
    calendarButtonState: {
        dayActive: false,
        weekActive: false,
        monthActive: true,
        yearActive: false
    },
    events: []
};

var updateEvents = function(data) {
    var formattedEvents = data.events.map(function(item) {
        return(
        {
            category: item.category,
            content: item.content,
            help: item.help,
            moment: moment(item.date),
            time: moment(item.date).format('h:mm a'),
            hour: moment(item.date).format('h a')
        }
        )
    });
    _store.events = formattedEvents;
};

const viewReducer = (state = initialState, action = null) => {
    switch(action.type){
        case appConstants.ActionTypes.CHANGE_BUTTON:
            return {...state, buttonBar : action.data};
        case appConstants.ActionTypes.SELECT_DAY:
            return {...state, selectedDay : action.data};
        case appConstants.ActionTypes.CHANGE_DISPLAY:
            return {...state, displayed : action.data};
        case appConstants.ActionTypes.RECEIVE_EVENTS:
            updateEvents(action.json);
            calendarStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
};

export {viewReducer}
