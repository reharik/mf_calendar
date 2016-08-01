import React, { PropTypes } from 'react';
import Header from './../containers/HeaderContainer';
import Month from './../containers/MonthContainer';
import Week from './../components/Week';
import Day from './../components/Day';

const Calendar = ({calendarView, calendarConfig}) => { //, calendarDate, dispatch}) => {

  let view = <Month />;
  switch (calendarView) {
    case 'week':
      view = <Week />;
      break;
    case 'day':
      view = <Day />;
      break;
  }

  // calendarConfig.retrieveDataAction(calendarDate.startOf(view).toString(calendarConfig.fetchDateFormat),
  //   calendarDate.endOf(view).toString(calendarConfig.fetchDateFormat),
  //   dispatch);

  return (<div className="calendar" style={{width: calendarConfig.width}}>
    <Header />
    <div className="calendar__display__view">
      { view }
    </div>
  </div>);
};

Calendar.propTypes = {
  calendarConfig: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  calendarView: PropTypes.string,
  calendarDate: PropTypes.object
};

export default Calendar;
