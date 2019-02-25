import React, {useContext} from "react";
import PropTypes from 'prop-types';
import MonthTasks from './MonthTasks';
import moment from 'moment';
import { addTimeToMoment } from './../utils/calendarUtils';
import CalendarContext from "../utils/calendarContext";

const MonthWeek = ({weekDays}) => {
  const config = useContext(CalendarContext);

  const onSelectSlot = date => {
      config.openSpaceClickedEvent({
        day: moment(date).format(),
        startTime: addTimeToMoment(config.dayStartsAt, moment(date).format())
      });
  };

  return (
    <ol className="redux__task__calendar__month__week" >
      { weekDays.map((day, idx) =>
        <li key={idx}
          className={day.classes}
          onClick={e => e.target === e.currentTarget ? onSelectSlot(day) : ''}>
          <div className="redux__task__calendar__month__day__number">{day.date()}</div>
          <MonthTasks tasks={day.tasks} />
        </li>)
      }
    </ol>
    );
};

MonthWeek.propTypes = {
  weekDays: PropTypes.array.isRequired,
};

export default MonthWeek;
