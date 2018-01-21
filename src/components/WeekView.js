import React from 'react';
import PropTypes from 'prop-types';
import AsideTimes from './AsideTimes';
import WeekDays from './WeekDays';

const WeekView = ({times, week, calendarName, startOfWeek, endOfWeek}) => (
    <div className="redux__task__calendar__week">
      <input data-id="startOfWeek" type="hidden" value={startOfWeek} />
      <input data-id="endOfWeek" type="hidden" value={endOfWeek} />
      <AsideTimes times={times} />
      <WeekDays week={week} calendarName={calendarName} />
    </div>
  );


WeekView.propTypes = {
  calendarName: PropTypes.string.isRequired,
  week: PropTypes.array.isRequired,
  times: PropTypes.array.isRequired
};

export default WeekView;
