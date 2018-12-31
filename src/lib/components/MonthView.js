import React from 'react';
import PropTypes from 'prop-types';
import MonthWeeks from './MonthWeeks';
import MonthDaysHeader from './MonthDaysHeader';
import CalendarContext from '../utils/calendarContext';

const MonthView = (tasks, selectedDay) => {
  const config = useContext(CalendarContext);

  useEffect(() =>
      config.retrieveData(selectedDay.startOf('month'), selectedDay.endOf('month'))
    , [selectedDay]);
  return (
    <div className="redux__task__calendar__month">
      <MonthDaysHeader/>
      <MonthWeeks tasks={tasks} selectedDay={selectedDay}/>
    </div>
  );
};

MonthView.propTypes = {
  weeks: PropTypes.array.isRequired
};

export default MonthView;
