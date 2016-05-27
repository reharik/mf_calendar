/**
 * Created by rharik on 5/25/16.
 */

import moment from 'moment';

var dateToMoment = function(date){
    var mom = date ? moment(date) : moment();
    return {
        date: mom,
        year: mom.year(),
        month: mom.format('MMMM'),
        // monthIndex is the month number obtained from moment, incremented by 1 to match node-calendar's format
        monthIndex: mom.month() + 1,
        weekIndex: mom.week(),
        dayIndex: mom.date(),
        // holiday: moment(date).holiday(),
        time: mom.format('h:mm a'),
        display: mom.format('MMMM') + ' ' + mom.year()
    }
};

var formatDisplay = function(mom, viewType){
    if(viewType == 'month'){
        return {...mom, display:mom.date.format('MMMM') + ' ' + mom.date.year()};
    }else if(viewType == 'day'){
        return {...mom, display:mom.date.format('dddd')};
    }
    return {...mom, display:mom.date[viewType]()};
};

var increment = function(mom, viewType){
    return formatDisplay(dateToMoment(mom.date.add(1,viewType)),viewType);
};

var decrement = function(mom, viewType){
    return formatDisplay(dateToMoment(mom.date.subtract(1, viewType)),viewType);
};

export {
   dateToMoment,
    increment,
    decrement,
    formatDisplay
}