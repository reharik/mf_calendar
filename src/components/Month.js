import React, { PropTypes } from 'react';
import MonthWeeks from './MonthWeeks';
import MonthDaysHeader from './MonthDaysHeader';

const Month = ({weeks}) => (
  <div className="redux__task__calendar__month">
    <MonthDaysHeader />
    <MonthWeeks weeks={weeks} />
  </div>
);

Month.propTypes = {
  weeks: PropTypes.array.isRequired
};

export default Month;
