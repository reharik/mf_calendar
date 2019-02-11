import React from "react";
import PropTypes from 'prop-types';
import MonthWeeks from './MonthWeeks';
import MonthDaysHeader from './MonthDaysHeader';

const MonthView = (tasks, selectedDay) => {
  return (
    <div className="redux__task__calendar__month">
      <MonthDaysHeader/>
      <MonthWeeks tasks={tasks} selectedDay={selectedDay}/>
    </div>
  );
};

MonthView.propTypes = {
  tasks: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired
};

export default MonthView;
