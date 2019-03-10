import React, {useContext} from "react";
import PropTypes from "prop-types";
import AsideTimes from "./AsideTimes";
import WeekDays from "./WeekDays";
import {rMoment} from './../utils/rMoment';
import {augmentTimes, getWeek} from "../utils/calendarUtils";
import CalendarContext from "../utils/calendarContext";

const WeekView = ({ tasks, selectedDay}) => {
  const config = useContext(CalendarContext);
  const week = getWeek(selectedDay, config);
  const times = augmentTimes(
    "redux__task__calendar__times__column__item ",
    undefined,
    config
  );
  const startOfWeek = rMoment(selectedDay)
    .startOf(config.firstDayOfWeek === 1 ? 'isoweek' : 'week')
    .startOf("day")
    .format();
  const endOfWeek = rMoment(selectedDay)
    .endOf(config.firstDayOfWeek === 1 ? 'isoweek' : 'week')
    .endOf("day")
    .format();

  return (
    <div className="redux__task__calendar__week">
      <input data-id="startOfWeek" type="hidden" value={startOfWeek}/>
      <input data-id="endOfWeek" type="hidden" value={endOfWeek}/>
      <AsideTimes times={times}/>
      <WeekDays week={week} tasks={tasks}/>
    </div>
  );
};

WeekView.propTypes = {
  tasks: PropTypes.array.isRequired,
  selectedDay: PropTypes.string.isRequired
};

export default WeekView;
