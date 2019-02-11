import moment from 'moment';
import invariant from 'invariant';

const validateTask = (task) => {
  invariant(task.startTime, `Tasks must have a start time! startTime: ${task.startTime}`);
  invariant(task.endTime, `Tasks must have a end time! endTime: ${task.endTime}`);
};

const momentFromTime = function(time, displayTimeFormat) {
  return moment.isMoment(time) ? time.clone() : moment(time, displayTimeFormat);
};

const addTimeToMoment = (time, target) => {
  let hour = parseInt(time.substring(0, time.indexOf(':')));
  let min =  parseInt(time.substring(time.indexOf(':') + 1, time.indexOf(' ')));
  let A = time.substring(time.indexOf(' ') + 1);
  hour = A === 'AM' || hour === 12 ? hour : hour + 12;
  return moment(target).hour(hour).minute(min);
};

const attemptToFixInvalidTimes = (task) => {
  task.startTime = addTimeToMoment(task.startTime, moment(task.date));
  task.endTime = addTimeToMoment(task.endTime, moment(task.date));
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
    if (!moment(t.endTime).isValid()) {
      attemptToFixInvalidTimes(t);
    }
    const endTime = moment(t.endTime);
    const startTime = moment(t.startTime);

    let date = moment(t.date || t.startTime);
    const inc = config && config.increments ? config.increments : 15;
    const slots = endTime.diff(startTime, 'minutes') / inc;
    const display = config && config.display && typeof config.display === 'function' ? config.display(t) : t.display;
    const title = t.title || moment(startTime).local().format( long ? 'lll' : 'LT' );
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
  let first = moment(day).startOf('week');
  if (config.firstDayOfWeek === 1) {
    first.add(1, 'day');
  }

  let week = [first];
  let i = 1;
  while (i < 7) {
    week.push(moment(first).add(i, 'day'));
    i++;
  }

  return week;
};

const formatHeaderDisplay = function(dt, viewType, config) {
  const mom = moment(dt);
  if (viewType === 'day') {
    return mom.format('MMMM') + ' ' + mom.date() + ', ' + mom.year();
  } else if (viewType === 'week') {
    const displayedWeek = getWeek(mom, config);
    return displayedWeek[0].format('MMMM Do') + ' - ' + displayedWeek[6].format('MMMM Do');
  }
  return mom.format('MMMM') + ' ' + mom.year();
};

const getTimesForDay = function(config) {
  let result = [];
  let time = moment(config.dayStartsAt, ['h:mm A']);
  const end = moment(config.dayEndsAt, ['h:mm A']);
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
