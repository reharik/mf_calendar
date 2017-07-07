import React from 'react';
import PropTypes from 'prop-types';
import MonthWeekContainer from '../containers/MonthWeekContainer';

const MonthWeeks = ({weeks, calendarName}) => (
  <div className="redux__task__calendar__month__weeks">
    { weeks.map((week, idx) => (
      <MonthWeekContainer
        calendarName={calendarName}
        week={week}
        key={idx} />
    ))}
  </div>);

MonthWeeks.propTypes = {
  weeks: PropTypes.array.isRequired,
  calendarName: PropTypes.string.isRequired
};

export default MonthWeeks;
