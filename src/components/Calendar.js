import React, { PropTypes } from 'react';
import Header from '../containers/HeaderContainer';
import Month from '../containers/MonthContainer';
import Week from './Week';
import Day from './Day';

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

  const style = calendarConfig.width ?{width: calendarConfig.width} : {};
  return (<div className="redux__task__calendar__calendar" style={style}>
    <Header />
    <div className="redux__task__calendar__calendar__display__view">
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
