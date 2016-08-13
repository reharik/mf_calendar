import React from 'react';
import AsideTimesContainer from '../containers/AsideTimesContainer';
import WeekDaysContainer from '../containers/WeekDaysContainer';

const Week = () => (
  <div className="redux__task__calendar__week">
    <AsideTimesContainer />
    <WeekDaysContainer />
  </div>
);

export default Week;
