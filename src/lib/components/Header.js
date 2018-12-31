import React from 'react';
import PropTypes from 'prop-types';
import HeaderDateNav from './HeaderDateNav';
import classNames from 'classnames';
import {formatHeaderDisplay} from "../utils/calendarUtils";

const Header = ({
                  config,
                  view,
                  selectedDay,
                  viewChanged,
                  dayChanged,
                }) => {

  const classes = (_view) => classNames('redux__task__calendar__header__view__nav_button',
    {'active': _view === view});

  const caption = formatHeaderDisplay(selectedDay, view, config);
  return (
    <header className="redux__task__calendar__header">
      {!config.hideDateNav
      ? <HeaderDateNav viewType={view}
                       dayChanged={dayChanged}
        selectedDay={selectedDay}
/>
          : null }
      <div className="redux__task__calendar__header__display__date">{caption}</div>
      {!config.hideViewMenu
        ? <div className="redux__task__calendar__header__view__nav" >
        <button onClick={() => viewChanged('day')} className={classes('day')}>Day</button>
        <button onClick={() => viewChanged('week')} className={classes('week')}>Week</button>
        <button onClick={() => viewChanged('month')} className={classes('month')}>Month</button>
      </div>
          : null}
    </header>);
};

Header.propTypes = {
  calendarView: PropTypes.string.isRequired,
  selectedDay: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  selectToday: PropTypes.func.isRequired,
  viewChangedEvent: PropTypes.func.isRequired,
  incrementDate: PropTypes.func.isRequired,
  decrementDate: PropTypes.func.isRequired,
  calendarName: PropTypes.string.isRequired,
  retrieveDataAction: PropTypes.func.isRequired
};

export default Header;
