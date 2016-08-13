import React, { PropTypes } from 'react';
import HeaderDateNav from './HeaderDateNav';

const Header = ({calendarView,
    selectedDay,
    caption,
    config,
    selectToday,
    viewChangedEvent,
    incrementDate,
    decrementDate,
    dispatch}) => {

  const viewChangedEventAction = view => {
    dispatch(viewChangedEvent(view));
    config.retrieveDataAction(selectedDay.startOf(view).toString(config.fetchDateFormat),
      selectedDay.endOf(view).toString(config.fetchDateFormat),
      dispatch);
  };
  let classes = ' redux__task__calendar__header__view__nav_button ';
  const dayClasses = (calendarView === 'day' ? 'active' : '') + classes;
  const weekClasses = (calendarView === 'week' ? 'active' : '') + classes;
  const monthClasses = (calendarView === 'month' ? 'active' : '') + classes;
  return (
    <header className="redux__task__calendar__header">
      <HeaderDateNav viewType={calendarView}
        increment={incrementDate}
        decrement={decrementDate}
        selectToday={selectToday}
        dispatch={dispatch}
        selectedDay={selectedDay}
        config={config} />
      <div className="redux__task__calendar__header__display__date">{caption}</div>
      <selection className="redux__task__calendar__header__view__nav" >
        <button onClick={() => viewChangedEventAction('day')} className={dayClasses}>Day</button>
        <button onClick={() => viewChangedEventAction('week')} className={weekClasses}>Week</button>
        <button onClick={() => viewChangedEventAction('month')} className={monthClasses}>Month</button>
      </selection>
    </header>);
};

Header.propTypes = {
  calendarView: PropTypes.string.isRequired,
  selectedDay: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
  selectToday: PropTypes.func,
  viewChangedEvent: PropTypes.func,
  incrementDate: PropTypes.func,
  decrementDate: PropTypes.func,
  dispatch: PropTypes.func
};

export default Header;
