import React from 'react';
import PropTypes from 'prop-types';
import MonthTasks from './MonthTasks';
import moment from 'moment';
import { addTimeToMoment, convertLocalTimeToUtc } from './../utils/calendarUtils';

const MonthWeek = ({weekDays,
                    calendarName,
                    dayStartsAt,
                    openSpaceClickedAction,
                    taskClickedAction,
                    openSpaceClickedEvent,
                    taskClickedEvent}) => {
  const selectSlotAction = time => {
    let openSpaceTask = {
      day: moment(time).format(),
      startTime: addTimeToMoment(dayStartsAt, moment(time).format())
    };

    if(openSpaceClickedEvent) {
      openSpaceClickedEvent(openSpaceTask, calendarName);
    } else {
      openSpaceClickedAction(openSpaceTask, calendarName);
    }
  };

  return (
    <ol className="redux__task__calendar__month__week" >
      { weekDays.map((day, idx) =>
        <li key={idx}
          className={day.classes}
          onClick={e => e.target === e.currentTarget ? selectSlotAction(day) : ''}>
          <div className="redux__task__calendar__month__day__number">{day.date()}</div>
          <MonthTasks tasks={day.tasks}
                      taskClickedAction={taskClickedAction}
                      taskClickedEvent={taskClickedEvent}
                      calendarName={calendarName} />
        </li>)
      }
    </ol>
    );
};

MonthWeek.propTypes = {
  weekDays: PropTypes.array.isRequired,
  calendarName: PropTypes.string.isRequired,
  dayStartsAt: PropTypes.string.isRequired,
  openSpaceClickedAction: PropTypes.func.isRequired,
  taskClickedAction: PropTypes.func.isRequired
};

export default MonthWeek;
