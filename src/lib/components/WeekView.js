import React from "react";
import PropTypes from "prop-types";
import AsideTimes from "./AsideTimes";
import WeekDays from "./WeekDays";
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
  const startOfWeek = selectedDay
    .startOf("week")
    .startOf("day")
    .toISOString();
  const endOfWeek = selectedDay
    .endOf("week")
    .endOf("day")
    .toISOString();

  return (
    <div className="redux__task__calendar__week">
      <input data-id="startOfWeek" type="hidden" value={startOfWeek}/>
      <input data-id="endOfWeek" type="hidden" value={endOfWeek}/>
      <AsideTimes times={times}/>
      <WeekDays week={week} tasks={tasks} />
    </div>
  );
};

WeekView.propTypes = {
  calendarName: PropTypes.string.isRequired,
  week: PropTypes.array.isRequired,
  times: PropTypes.array.isRequired
};

export default WeekView;
