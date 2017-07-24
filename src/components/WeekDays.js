import React from 'react';
import PropTypes from 'prop-types';
import DayContainer from '../containers/DayContainer';

const WeekDays = ({week, calendarName}) => {
  return (
    <ol className="redux__task__calendar__week__days">
      {week.map(day =>
        <li className="redux__task__calendar__week__day" key={day}>
          <DayContainer date={day} calendarName={calendarName} />
        </li>
      )}
    </ol>);
};

WeekDays.propTypes = {
  calendarName: PropTypes.string.isRequired,
  week: PropTypes.array.isRequired
};

export default WeekDays;
