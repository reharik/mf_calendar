import React, { PropTypes } from 'react';
import WeekDayName from './WeekDayName';
import Tasks from './../containers/TaskTargetContainer';

const WeekDay = ({view,
    tasks,
    times,
    dayName,
    isToday,
    config,
    dispatch
} ) => {

  const selectSlotAction = time => {
    config.openSpaceClickedAction(time.day, time.time, dispatch);
  };
  let thisView = view === 'week' ? 'redux__task__calendar__week__' : 'redux__task__calendar__';
  let olClass = thisView + 'day__items';
  olClass = isToday ? olClass + ' ' + thisView + 'day__isToday' : olClass;
  const getTasksForTime = (_tasks, time) => _tasks.filter(x => x.startTime.format('H:mm A') === time);
  return (
    <ol className={olClass}>
      <li className={thisView + 'day__items__name'}>
        <WeekDayName name={dayName} view={thisView} />
      </li>
      {times.map(timeObj => (
        <li className={timeObj.classes}
          key={timeObj.time}
          onClick={ e => !e.target.className.startsWith('task') ? selectSlotAction(timeObj) : null }>
          <Tasks tasks={getTasksForTime(tasks, timeObj.time)}
            time={timeObj.time}
            day={timeObj.day}
            config={config}
            dispatch={dispatch} />
        </li>))}
    </ol>);
};

WeekDay.propTypes = {
  view: PropTypes.string,
  tasks: PropTypes.array.isRequired,
  times: PropTypes.array.isRequired,
  dayName: PropTypes.string.isRequired,
  isToday: PropTypes.bool,
  config: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default WeekDay;
