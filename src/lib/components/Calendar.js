import React from "react";
import PropTypes from "prop-types";

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Header from "../components/Header";
import MonthView from "../components/MonthView";
import WeekView from "../components/WeekView";
import DayView from "../components/DayView";
import {Moment} from "moment";
import CalendarContext from "../utils/calendarContext";

const Calendar = ({width, tasks}) => {
  const config = useContext(CalendarContext);
  const [selectedDay, setSelectedDay] = useState(new Moment());
  const [calendarView, setCalendarView] = useState(config.defaultView);

  let view;
  switch (calendarView) {
    case "week":
      view = <WeekView tasks={tasks} selectedDay={selectedDay} />;
      break;
    case "day":
      view = <DayView tasks={tasks} selectedDay={selectedDay} />;
      break;
    default:
      view = <MonthView tasks={tasks} selectedDay={selectedDay}/>;
  }

  const style = width ? { width } : {};

  return (
    <div className="redux__task__calendar__calendar" style={style}>
      <Header
        config={config}
        view={calendarView}
        selectedDay={selectedDay}
        viewChanged={setCalendarView}
        dayChanged={setSelectedDay} />
      <div className="redux__task__calendar__calendar__display__view">{view}</div>
    </div>
  );
};

Calendar.propTypes = {
  calendarName: PropTypes.string.isRequired,
  calendarView: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default DragDropContext(HTML5Backend)(Calendar); // eslint-disable-line new-cap
