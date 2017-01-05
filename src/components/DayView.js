import React from 'react';
import AsideTimes from './AsideTimes';
import DayContainer from '../containers/DayContainer';

const Day =  ({times, calendarConfig, actions})=> (
  <div className="redux__task__calendar__day">
    <AsideTimes times={times} />
    <DayContainer calendarConfig={calendarConfig} actions={actions}/>
  </div>
);

export default Day;
