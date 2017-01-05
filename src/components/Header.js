import React, { PropTypes } from 'react';
import HeaderDateNav from './HeaderDateNav';
import classNames from 'classnames'

const Header = ({calendarView,
    selectedDay,
    caption,
    selectToday,
    viewChangedEvent,
    incrementDate,
    decrementDate,
    retrieveDataArguments,
    actions,
    calendarConfig}) => {

  const viewChangedEventAction = view => {
    viewChangedEvent(view);
    const _args = retrieveDataArguments(view);
    actions.retrieveDataAction(..._args)
  };

  let classes = (view) => classNames('redux__task__calendar__header__view__nav_button',
    {'active': calendarView === view});
  
  return (
    <header className="redux__task__calendar__header">
      <HeaderDateNav viewType={calendarView}
        increment={incrementDate}
        decrement={decrementDate}
        selectToday={selectToday}
        selectedDay={selectedDay}
                     calendarConfig={calendarConfig}
                     retrieveDataArguments={retrieveDataArguments}
                     actions={actions} />
      <div className="redux__task__calendar__header__display__date">{caption}</div>
      <selection className="redux__task__calendar__header__view__nav" >
        <button onClick={() => viewChangedEventAction('day')} className={classes('day')}>Day</button>
        <button onClick={() => viewChangedEventAction('week')} className={classes('week')}>Week</button>
        <button onClick={() => viewChangedEventAction('month')} className={classes('month')}>Month</button>
      </selection>
    </header>);
};

Header.propTypes = {
  calendarView: PropTypes.string.isRequired,
  selectedDay: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  selectToday: PropTypes.func,
  viewChangedEvent: PropTypes.func,
  incrementDate: PropTypes.func,
  decrementDate: PropTypes.func,
  actions: PropTypes.object,
  calendarConfig: PropTypes.object
};

export default Header;
