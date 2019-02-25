import React from 'react';
import PropTypes from 'prop-types';
import MonthWeekContainer from '../containers/MonthWeekContainer';
import moment from 'moment';
import Calendar from "node-calendar";

const MonthWeeks = ({selectedDay, tasks}) =>{
  const selectedMom = moment(selectedDay);
  var weeks = new Calendar
    .Calendar(Calendar.SUNDAY)
    .monthdatescalendar(selectedMom.year(),
      selectedMom.month() + 1);
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
  tasks: PropTypes.array.isRequired,
  selectedDay: PropTypes.string.isRequired
};

export default MonthWeeks;
