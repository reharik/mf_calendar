import React, { PropTypes } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import HeaderContainer from '../containers/HeaderContainer';
import MonthViewContainer from '../containers/MonthViewContainer';
import WeekViewContainer from '../containers/WeekViewContainer'
import DayViewContainer from '../containers/DayViewContainer'

const Calendar = ({calendarView, calendarConfig, actions}) => {

  let view = (<MonthViewContainer calendarConfig={calendarConfig} actions={actions} />);
  switch (calendarView) {
    case 'week':
      view = <WeekViewContainer calendarConfig={calendarConfig} actions={actions}/>;
      break;
    case 'day':
      view = <DayViewContainer calendarConfig={calendarConfig} actions={actions}/>;
      break;
  }

  const style = calendarConfig.width ? {width:calendarConfig.width} : {};
  return (<div className="redux__task__calendar__calendar" style={style}>
    <HeaderContainer actions={actions} calendarConfig={calendarConfig} />
    <div className="redux__task__calendar__calendar__display__view">
      { view }
    </div>
  </div>);
};

Calendar.propTypes = {
  calendarConfig: PropTypes.object.isRequired,
  calendarView: PropTypes.string,
  actions: PropTypes.object
};

export default DragDropContext(HTML5Backend)(Calendar); // eslint-disable-line new-cap
