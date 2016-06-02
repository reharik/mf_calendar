/**
 * Created by rharik on 5/25/16.
 */

import Calendar from 'node-calendar'
import moment from 'moment';
import {taskStartsInTimeSlot, timeIsBetweenStartInc, getTimesForDay} from './../utils/timeUtils';

var dateToMoment = function(date){
    var mom = moment.isMoment(date) ? date : date ? moment(date) : moment();
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
        return {...mom, display:mom.date.format('MMMM') + " " + mom.dayIndex + ", " + mom.date.year()}
    } else if(viewType == 'week'){
        var displayedWeek = getWeek(mom);
        var caption = displayedWeek[0].format('MMMM Do') + " - " + displayedWeek[6].format('MMMM Do');
        return {...mom, display:caption};
    }
    return {...mom, display:mom.date[viewType]()};
};

var increment = function(mom, viewType){
    return formatDisplay(dateToMoment(mom.date.add(1,viewType)),viewType);
};

var decrement = function(mom, viewType){
    return formatDisplay(dateToMoment(mom.date.subtract(1, viewType)),viewType);
};

var buildDayWithTasks = function(_day, events, config) {

    var matchedEvents = (day, events) => events.filter(e => e.moment.isSame(day.date, 'day'));

    var day = {..._day, tasks: matchedEvents(_day, events)};

    return getTimesForDay(config).map(time => {
        return {
            time,
            moment: day.date,
            dayName: day.date.format('dddd'),
            tasks: day.tasks.filter(task => taskStartsInTimeSlot(task, time, config.increment))
        }
    });
};

var getWeek = function(day) {
    var calendar = new Calendar.Calendar(Calendar.SUNDAY);
    var week = calendar.monthdatescalendar(day.year, day.monthIndex)
        .filter(week => week.some(date=> moment(date).isSame(day.date, 'day')));
    return week ? week[0].map(x=>moment(x)) : [];
};

export {
    dateToMoment,
    increment,
    decrement,
    formatDisplay,
    buildDayWithTasks,
    getWeek
}