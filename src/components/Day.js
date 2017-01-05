import React, { PropTypes } from 'react';
import Tasks from './../containers/TaskTargetContainer';
import classNames from 'classnames';

const Day = ({view,
    tasks,
    times,
    dayName,
    isToday, 
  actions,
  calendarConfig
} ) => {

  const selectSlotAction = time => {
    actions.openSpaceClickedAction(time.day, time.time);
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

  const getTasksForTime = (_tasks, time) => _tasks.filter(x => x.startTime.format('H:mm A') === time);
  
  return (
    <ol className={olClasses}>
      <li className={liClasses}>
        <div className={dayNameClasses}>{dayName}</div>
      </li>
      {times.map(timeObj => (
        <li className={timeObj.classes}
          key={timeObj.time}
          onClick={ e => !e.target.className.startsWith('task') ? selectSlotAction(timeObj) : null }>
          <Tasks tasks={getTasksForTime(tasks, timeObj.time)}
            time={timeObj.time}
            day={timeObj.day}
            actions={actions} 
            calendarConfig={calendarConfig}/>
        </li>))}
    </ol>);
};

Day.propTypes = {
  view: PropTypes.string, 
  tasks: PropTypes.array.isRequired,
  calendarConfig: PropTypes.object.isRequired,
  dayName: PropTypes.string.isRequired,
  isToday: PropTypes.bool,
  actions: PropTypes.object
};

export default Day;
