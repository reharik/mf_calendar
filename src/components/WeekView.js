import React from 'react';
import AsideTimes from './AsideTimes';
import WeekDays from './WeekDays';

const WeekView = ({times, week, calendarConfig, actions}) => (
    <div className="redux__task__calendar__week">
      <AsideTimes times={times} />
      <WeekDays week={week} calendarConfig={calendarConfig} actions={actions}/>
    </div>
  );

export default WeekView;
