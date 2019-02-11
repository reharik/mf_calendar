import React, {useContext} from "react";
import PropTypes from "prop-types";
import AsideTimes from "./AsideTimes";
import DayContainer from "../containers/DayContainer";
import { augmentTimes } from '../utils/calendarUtils';
import CalendarContext from "../utils/calendarContext";

const DayView = ({tasks, selectedDay}) => {
  const config = useContext(CalendarContext);

  const times = augmentTimes(
    "redux__task__calendar__times__column__item ",
    undefined,
    config
  );
  return (<div className="redux__task__calendar__day">
      <AsideTimes times={times}/>
      <DayContainer tasks={tasks} date={selectedDay} />
    </div>
  );

};

DayView.propTypes = {
  tasks: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired
};

export default DayView;
