import {normalizeTasks} from '../utils/calendarUtils';
import MonthWeek from '../components/MonthWeek';
import {rMoment} from './../utils/rMoment';
import CalendarContext from "../utils/calendarContext";
import React, {useContext} from "react";

const monthWeekContainer = ({week, tasks, selectedDay}) => {
  const config = useContext(CalendarContext);

  const buildClasses = (day, today, selectedDay, index) => {

    let classes = 'redux__task__calendar__month__day';
    if (today.isSame(day, 'day')) {
      classes += ' redux__task__calendar__month__day__today';
    }

    if (selectedDay.isSame(day, 'day')) {
      classes += ' redux__task__calendar__month__day__selected';
    }
    if ((index + 1) % 7 === 0) {
      classes += ' redux__task__calendar__month__day__last';
    }

    if (day.month() !== selectedDay.month()) {
      classes += ' redux__task__calendar__month__day__otherMonth';
    }
    return classes;
  };

  let weekDays = week.map((date, idx) => {
    let day = rMoment(date);
    day.classes = buildClasses(day, rMoment(), rMoment(selectedDay), idx);
    let unprocessedTasks = (tasks || [])
      .filter(e => rMoment(e.date || e.startTime).isSame(day, 'day'))
      .filter(a => config.taskFilter(a))
      .map(a => config.taskMap(a));
    day.tasks = normalizeTasks(unprocessedTasks, config);
    return day;
  });

  return (<MonthWeek weekDays={weekDays}/>);
};

export default monthWeekContainer;
