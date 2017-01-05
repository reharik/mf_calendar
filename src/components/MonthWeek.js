import React, { PropTypes } from 'react';
import MonthTasks from './MonthTasks';

const MonthWeek = ({weekDays, calendarConfig, actions}) => {

  const selectSlotAction = time => {
    actions.openSpaceClickedAction(time.format(calendarConfig.fetchDateFormat), calendarConfig.dayStartsAt);
  };

  return (
    <ol className="redux__task__calendar__month__week" >
      { weekDays.map((day, idx) =>
        <li key={idx}
          className={day.classes}
          onClick={e => e.target === e.currentTarget ? selectSlotAction(day) : ''}>
          <div className="redux__task__calendar__month__day__number">{day.date()}</div>
          <MonthTasks tasks={day.tasks} actions={actions} />
        </li>)
      }
    </ol>
    );
};

MonthWeek.propTypes = {
  weekDays: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  calendarConfig: PropTypes.object.isRequired
};

export default MonthWeek;
