import React from 'react';
import AsideTimesContainer from '../containers/AsideTimesContainer';
import DayContainer from '../containers/DayContainer';

const Day = () => (
  <div className="redux__task__calendar__day">
    <AsideTimesContainer />
    <DayContainer />
  </div>
);

export default Day;
