import React from 'react';
import PropTypes from 'prop-types';
import MonthWeekContainer from '../containers/MonthWeekContainer';
import Calendar from "node-calendar";

const MonthWeeks = ({selectedDay, tasks}) =>{
  var weeks = new Calendar
    .Calendar(Calendar.SUNDAY)
    .monthdatescalendar(selectedDay.year(),
      selectedDay.month() + 1);
  return (
    <div className="redux__task__calendar__month__weeks">
      { weeks.map((week, idx) => (
        <MonthWeekContainer
          tasks={tasks}
          selectedDay={selectedDay}
          week={week}
          key={idx} />
      ))}
    </div>);
}

MonthWeeks.propTypes = {
  weeks: PropTypes.array.isRequired,
  calendarName: PropTypes.string.isRequired
};

export default MonthWeeks;
