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
        time: mom.format('h:mm a')
    }
};


export {
   dateToMoment 
}