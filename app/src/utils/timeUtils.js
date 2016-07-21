/**
 * Created by rharik on 6/1/16.
 */
import moment from 'moment';

var momentFromTime = function(time){
    return moment.isMoment(time) ? time.clone() : moment(time, ["h:mm A"]);
};

var timeIsBetween = function(_target, _start, _end){
    var target = moment.isMoment(_target) ? _target : momentFromTime(_target);
    var start = moment.isMoment(_start) ? _start : momentFromTime(_start);
    var end = moment.isMoment(_end) ? _end : momentFromTime(_end);
    return target.isBetween(start, end, 'minutes', '[)');
};

var timeIsBetweenStartInc = function(target, start, inc){
    var end = momentFromTime(start).add(inc, 'minutes');
    return timeIsBetween(target, start, end);
};

var getTimesForDay = function(config){
    var result = [];
    var time = momentFromTime(config.startDay);
    var end =  momentFromTime(config.endDay);
    while(time.isBefore(end,'minutes', '[)')){
        result.push(time.format("h:mm A"))
        time.add(config.increment, 'minutes');
    }
    return result;
};

var getHalfHoursForDay = function(config) {
    return getTimesForDay(config).map(t=>
    (t.indexOf('00')>0 || t.indexOf('30') >0)
        ? t
        : ''
    )
};

var taskStartsInTimeSlot = function(task, time, inc) {
    return timeIsBetweenStartInc(task.startTime, time, inc);
};

var taskTimeSlots = function(task, inc){
    var startTime = momentFromTime(task.startTime);
    var endTime = momentFromTime(task.endTime);
    var diff = endTime.diff(startTime, 'minutes');
    return diff/inc;
};

export {
    momentFromTime,
    timeIsBetween,
    timeIsBetweenStartInc,
    getTimesForDay,
    taskStartsInTimeSlot,
    getHalfHoursForDay,
    taskTimeSlots
}