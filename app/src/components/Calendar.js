import React, { PropTypes } from 'react';
import Header from './../containers/HeaderContainer';
import Month from './../containers/MonthContainer';
import Week from './../components/Week';
import Day from './../components/Day';

const Calendar = ({calendarView, calendarConfig}) => {
  let view = <Month />;
  switch (calendarView.view) {
    case 'week':
      view = <Week />;
      break;
    case 'day':
      view = <Day />;
      break;
  }
  return (<div className="calendar" style={{width: calendarConfig.width}}>
    <Header />
    <div className="calendar__display__view">
      { view }
    </div>
  </div>);
};

Calendar.propTypes = {
  calendarView: PropTypes.object,
  calendarConfig: PropTypes.object.isRequired
};

export default Calendar;
