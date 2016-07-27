import React, { PropTypes } from 'react';
import MonthTasks from './MonthTasks';

const MonthWeek = ({weekDays, config, dispatch}) => {
  const selectSlotAction = time => {
    config.openSpaceClickedAction(time.day, time.time, dispatch);
  };
  return (
    <ol className="month__week" >
      { weekDays.map((day, idx) =>
        <li key={idx}
          className={day.classes}
          onClick={e => e.target === e.currentTarget ? selectSlotAction(day) : ''}>
          <div className="month__day__number">{day.date()}</div>
          <MonthTasks tasks={day.tasks} config={config} dispatch={dispatch} />
        </li>)
      }
    </ol>
    );
};

MonthWeek.propTypes = {
  weekDays: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default MonthWeek;
