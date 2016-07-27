import React, { PropTypes } from 'react';
import MonthWeekContainer from './../containers/MonthWeekContainer';

const MonthWeeks = ({weeks}) => (
  <div className="month__weeks">
    { weeks.map((week, idx) => ( <MonthWeekContainer week={week} key={idx} /> ))}
  </div>);

MonthWeeks.propTypes = {
  weeks: PropTypes.array.isRequired
};

export default MonthWeeks;
