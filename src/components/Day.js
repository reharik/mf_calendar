import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './../containers/TaskTargetContainer';
import classNames from 'classnames';
import moment from 'moment';
import { addTimeToMoment, convertLocalTimeToUtc } from './../utils/calendarUtils';

const Day = ({view,
            tasks,
             times,
            dayName,
            isToday,
            calendarName,
            increment,
            displayTimeFormat,
            fetchDateFormat,
            taskClickedAction,
            openSpaceClickedAction,
            updateTaskViaDND,
            openSpaceClickedEvent,
            taskClickedEvent,
            canUpdate
} ) => {
  const selectSlotAction = (e,time) => {
    if(e.target.className.includes('task__item')) {
      return;
    }

    let openSpaceTask = {
      day: moment(time.day).hour(0).minute(0).format(),
      startTime: addTimeToMoment(time.time, time.day).format()
    };

    if(openSpaceClickedEvent) {
      openSpaceClickedEvent(openSpaceTask, calendarName);
    } else {
      openSpaceClickedAction(openSpaceTask, calendarName);
    }
  };

  let dayNameClasses = classNames(
    {'redux__task__calendar__week__day__items__name__value' : view === 'week'},
    {'redux__task__calendar__day__items__name__value' : view !== 'week' }
  );

  let liClasses = classNames(
    {'redux__task__calendar__week__day__items__name' : view === 'week'},
    {'redux__task__calendar__day__items__name' : view !== 'week' }
  );

  let baseOLClasses = classNames(
    {'redux__task__calendar__week__day__items' : view === 'week'},
    {'redux__task__calendar__day__items' : view !== 'week' },
  );

  let isTodayOLClasses = classNames(
    {'redux__task__calendar__week__day__isToday' : view === 'week'},
    {'redux__task__calendar__day__isToday' : view !== 'week' },
  );

  let olClasses = classNames(baseOLClasses, {
    [isTodayOLClasses]: isToday
  });

  const getTasksForTime = (_tasks, time) => _tasks.filter(x => {
    return moment(x.startTime).local().format('h:mm A') === time;
  });

  return (
    <ol className={olClasses}>
      <li className={liClasses}>
        <div className={dayNameClasses}>{dayName}</div>
      </li>
      {times.map(timeObj => (
        <li className={timeObj.classes}
          key={timeObj.time}
          onClick={ e => selectSlotAction(e,timeObj)}>
          <Tasks tasks={getTasksForTime(tasks, timeObj.time)}
            time={timeObj.time}
            day={timeObj.day}
                 increment={increment}
                 displayTimeFormat={displayTimeFormat}
                 fetchDateFormat={fetchDateFormat}
                 taskClickedAction={taskClickedAction}
                 taskClickedEvent={taskClickedEvent}
                 updateTaskViaDND={updateTaskViaDND}
                 calendarName={calendarName}
                 canUpdate={canUpdate} />
        </li>))}
    </ol>);
};

Day.propTypes = {
  view: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  times: PropTypes.array.isRequired,
  calendarName: PropTypes.string.isRequired,
  dayName: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  taskClickedAction: PropTypes.func.isRequired,
  openSpaceClickedAction: PropTypes.func.isRequired,
  updateTaskViaDND: PropTypes.func.isRequired
};

export default Day;
