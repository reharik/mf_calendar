import React, { PropTypes } from 'react';

const WeekDayName = ({name, view}) => ( <div className={view + 'day__items__name__value'}>{name}</div> );

WeekDayName.propTypes = {
  name: PropTypes.string.isRequired,
  view: PropTypes.string
};

export default WeekDayName;
