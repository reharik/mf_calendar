import React, { PropTypes } from 'react';
import DayContainer from '../containers/DayContainer';

const WeedkDays = ({week, calendarConfig, actions}) => {
  return (
    <ol className="redux__task__calendar__week__days">
      {week.map(day =>
        <li className="redux__task__calendar__week__day" key={day}>
          <DayContainer date={day} calendarConfig={calendarConfig} actions={actions}  />
        </li>
      )}
    </ol>);
};

WeedkDays.propTypes = {
  week: PropTypes.array.isRequired
};

export default WeedkDays;
