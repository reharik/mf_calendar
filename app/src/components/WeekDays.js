import React, { PropTypes } from 'react';
import DayContainer from './../containers/DayContainer';

const WeedkDays = ({week}) => (
  <ol className="week__days">
    {week.map(day =>
      <li className="week__day" key={day}>
        <DayContainer date={day} />
      </li>
      )}
  </ol>);

WeedkDays.propTypes = {
  week: PropTypes.array.isRequired
};

export default WeedkDays;
