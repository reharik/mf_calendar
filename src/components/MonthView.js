import React from 'react';
import PropTypes from 'prop-types';
import MonthWeeks from './MonthWeeks';
import MonthDaysHeader from './MonthDaysHeader';

const MonthView = (props) => (
    <div className="redux__task__calendar__month">
      <MonthDaysHeader />
      <MonthWeeks {...props} />
    </div>
  );

MonthView.propTypes = {
  weeks: PropTypes.array.isRequired
};

export default MonthView;
