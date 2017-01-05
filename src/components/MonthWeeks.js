import React, { PropTypes } from 'react';
import MonthWeekContainer from '../containers/MonthWeekContainer';

const MonthWeeks = ({weeks, calendarConfig, actions}) => (
  <div className="redux__task__calendar__month__weeks">
    { weeks.map((week, idx) => (
      <MonthWeekContainer
        calendarConfig={calendarConfig}
        actions={actions}
        week={week}
        key={idx} />
    ))}
  </div>);

MonthWeeks.propTypes = {
  weeks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  calendarConfig: PropTypes.object.isRequired
};

export default MonthWeeks;
