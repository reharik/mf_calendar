import {rMoment, isMoment} from './rMoment';
import invariant from 'invariant';
import moment from 'moment';

const validateTask = (task) => {
  invariant(task.startTime, `Tasks must have a start time! startTime: ${task.startTime}`);
  invariant(task.endTime, `Tasks must have a end time! endTime: ${task.endTime}`);
};

const momentFromTime = function(time, displayTimeFormat) {
  return isMoment(time) ? time.clone() : rMoment(time, displayTimeFormat);
};

const addTimeToMoment = (time, target) => {
  let hour = parseInt(time.substring(0, time.indexOf(':')));
  let min =  parseInt(time.substring(time.indexOf(':') + 1, time.indexOf(' ')));
  let A = time.substring(time.indexOf(' ') + 1);
  hour = A === 'AM' || hour === 12 ? hour : hour + 12;
  return rMoment(target).hour(hour).minute(min);
};

const attemptToFixInvalidTimes = (task) => {
  task.startTime = addTimeToMoment(task.startTime, rMoment(task.date));
  task.endTime = addTimeToMoment(task.endTime, rMoment(task.date));
};

const normalizeTasks = function(tasks, config, long) {
  if(!tasks) {
    return [];
  }
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  return tasks.map(t => {
    validateTask(t);
    if (!rMoment(t.endTime).isValid()) {
      attemptToFixInvalidTimes(t);
    }
    const endTime = rMoment(t.endTime);
    const startTime = rMoment(t.startTime);

    let date = rMoment(t.date || t.startTime);
    const inc = config && config.increments ? config.increments : 15;
    const slots = endTime.diff(startTime, 'minutes') / inc;
    const display = config && config.display && typeof config.display === 'function' ? config.display(t) : t.display;
    const title = t.title || rMoment(startTime).format( long ? 'lll' : 'LT' );
// `${startTime.format('h:mm')} - ${endTime.format('h:mm')}`;
    // const title = t.title || startTime.format('MMM Do h:mm A');
    return {
      date,
      startTime,
      endTime,
      slots,
      display,
      title,
      editable: t.editable || true,
      id: t[config.taskId],
      color: t.color || config.color,
      titleColor: t.titleColor || config.titleColor,
      orig: t.orig || t
    };
  });
};

// day is local moment
const getWeek = function(day, config) {
  let first = rMoment(day).startOf(config.firstDayOfWeek === 1 ? 'isoweek' : 'week');
  let week = [first];
  let i = 1;
  while (i < 7) {
    week.push(rMoment(first).add(i, 'day'));
    i++;
  }

  return week;
};

const formatHeaderDisplay = function(dt, viewType, config) {
  const mom = rMoment(dt);
  if (viewType === 'day') {
    return mom.format('MMMM') + ' ' + mom.date() + ', ' + mom.year();
  } else if (viewType === 'week') {
    const displayedWeek = getWeek(mom, config);
    return displayedWeek[0].format('MMMM Do') + ' - ' + displayedWeek[6].format('MMMM Do');
  }
  return mom.format('MMMM') + ' ' + mom.year();
};

const parseHour = (time) => {
  let hour = parseInt(time.substring(0, time.indexOf(':')));
  let A = time.substring(time.indexOf(' ') + 1);
  hour = A === 'AM' || hour === 12 ? hour : hour + 12;
 return hour;
}

const getTimesForDay = function(config) {
  let result = [];
  const startHour = parseHour(config.dayStartsAt)
  let startMinute =  parseInt(config.dayStartsAt.substring(config.dayStartsAt.indexOf(':') + 1, config.dayStartsAt.indexOf(' ')));
  const endHour = parseHour(config.dayEndsAt)
  let endMinute =  parseInt(config.dayEndsAt.substring(config.dayEndsAt.indexOf(':') + 1, config.dayEndsAt.indexOf(' ')));
  let time = rMoment().startOf('day').add(startHour, 'hour').add(startMinute, 'minute');
  let end = rMoment().startOf('day').add(endHour, 'hour').add(endMinute, 'minute');
  while (time.isBefore(end, 'minutes', '[)')) {
    result.push(time.format(config.displayTimeFormat));
    time.add(config.increment, 'minutes');
  }
  return result;
};

const augmentTimes = (classes, day, config) => {
  return getTimesForDay(config).map(time => {
    var myClasses = classes;
    const isHour = time.indexOf(':00') > -1;
    myClasses = isHour ? myClasses + 'redux__task__calendar__hour__breaks' : myClasses;
    const isHalfHour = time.indexOf(':30') > -1;
    myClasses = isHalfHour ? myClasses + 'redux__task__calendar__halfhour__breaks' : myClasses;
    return {time, isHour, isHalfHour, classes: myClasses, display: isHour ? time : ' ', day};
  });
};

export {
    formatHeaderDisplay,
    normalizeTasks,
    momentFromTime,
    addTimeToMoment,
    augmentTimes,
    getWeek
};
