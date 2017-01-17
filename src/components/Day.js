import React, { PropTypes } from 'react';
import Tasks from './../containers/TaskTargetContainer';
import classNames from 'classnames';

const Day = ({view,
            tasks,
            times,
            dayName,
            isToday,
            calendarName,
            increment,          
            displayTimeFormat,
            taskClickedAction,
            openSpaceClickedAction,
            updateTaskViaDND,
            openSpaceClickedEvent,
            taskClickedEvent
} ) => {
  const selectSlotAction = (e,time) => {
    if(e.target.className.includes('task__item')) {
      return;
    }
    if(openSpaceClickedEvent) {
      openSpaceClickedEvent(time.day, time.time.format(displayTimeFormat), calendarName);
    } else {
      openSpaceClickedAction(time.day, time.time.format(displayTimeFormat), calendarName);
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

  const getTasksForTime = (_tasks, time) => _tasks.filter(x => x.startTime.format('H:mm A') === time);
  
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
                 taskClickedAction={taskClickedAction}
                 taskClickedEvent={taskClickedEvent}
                 updateTaskViaDND={updateTaskViaDND}
                 calendarName={calendarName}/>
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
