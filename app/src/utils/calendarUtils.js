
import Calendar from 'node-calendar'
import moment from 'moment';
import invariant from 'invariant';

var normalizeTasks = function(tasks, config) {

    return tasks.map(t => {
        validateTask(t);
        var endTime = momentFromTime(t.endTime);
        var startTime = momentFromTime(t.startTime);
        var date = t.date ? moment(t.date) : moment(startTime);
        var inc = config && config.increments ? config.increments : 15;
        var slots = endTime.diff(startTime, 'minutes')/inc;
        var display = config && config.display && typeof config.display  === 'function' ? config.display(t) : t.display;
        var title = t.title || t.startTime;
        return {
            date,
            startTime,
            endTime,
            slots,
            display,
            title,
            id: t.id,
            color: t.color, // || config.defaultColor,
            titleColor: t.titleColor, // || config.defaultTitleColor,
            orig:t
        }
    })
};

var validateTask = (task) => {
    invariant(task.startTime, `Tasks must have a start time! startTime: ${task.startTime}`);
    invariant(task.endTime, `Tasks must have a end time! endTime: ${task.endTime}`);
};

var formatHeaderDisplay = function(mom, viewType){
    if(viewType == 'day'){
        return mom.format('MMMM') + " " + mom.date() + ", " + mom.year()
    } else if(viewType == 'week'){
        var displayedWeek = getWeek(mom);
        return displayedWeek[0].format('MMMM Do') + " - " + displayedWeek[6].format('MMMM Do');
    }
    return mom.format('MMMM') + ' ' + mom.year()
};

var momentFromTime = function(time){
    return moment.isMoment(time) ? time.clone() : moment(time, ["h:mm A"]);
};

var getTimesForDay = function(config){
    var result = [];
    var time = config.startDay.clone();
    var end =  config.endDay;
    while(time.isBefore(end,'minutes', '[)')){
        result.push(time.format("h:mm A"))
        time.add(config.increment, 'minutes');
    }
    return result;
};

var augmentTimes = (config, classes, day) => {
    return getTimesForDay(config).map(time => {
        var isHour = time.indexOf(':00') > -1;
        classes = isHour ? classes + 'hour__breaks' : classes;
        return {time, isHour, classes, display: isHour ? time : ' ', day};
    })
};

var getWeek = function(day) {
    var calendar = new Calendar.Calendar(Calendar.SUNDAY);
    var week = calendar.monthdatescalendar(day.year(), day.month() + 1)
        .filter(week => week.some(date => moment(date).isSame(day, 'day')));
    return week.length > 0 ? week[0].map(x=>moment(x)) : [];
};

export {
    formatHeaderDisplay,
    normalizeTasks,
    momentFromTime,
    augmentTimes,
    getWeek
}