import React, { PropTypes } from 'react';
import MonthTasks from './MonthTasks';

const MonthWeek = ({weekDays,
                    calendarName,
                    fetchDateFormat,
                    dayStartsAt,
                    openSpaceClickedAction,
                    taskClickedAction}) => {

  const selectSlotAction = time => {
    openSpaceClickedAction(time.format(fetchDateFormat), dayStartsAt, calendarName);
  };

  return (
    <ol className="redux__task__calendar__month__week" >
      { weekDays.map((day, idx) =>
        <li key={idx}
          className={day.classes}
          onClick={e => e.target === e.currentTarget ? selectSlotAction(day) : ''}>
          <div className="redux__task__calendar__month__day__number">{day.date()}</div>
          <MonthTasks tasks={day.tasks} taskClickedAction={taskClickedAction} calendarName={calendarName} />
        </li>)
      }
    </ol>
    );
};

MonthWeek.propTypes = {
  weekDays: PropTypes.array.isRequired,
  calendarName: PropTypes.string.isRequired,
  fetchDateFormat: PropTypes.string.isRequired,
  dayStartsAt: PropTypes.string.isRequired,
  openSpaceClickedAction: PropTypes.func.isRequired,
  taskClickedAction: PropTypes.func.isRequired
};

export default MonthWeek;
