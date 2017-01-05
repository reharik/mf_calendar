import React, { PropTypes } from 'react';

const HeaderDateNav = ({viewType, selectedDay, fetchDateFormat, retrieveDataAction, increment, decrement, selectToday}) => {
  const viewChangedEventAction = (func, view) => {
    func(view);
    retrieveDataAction(selectedDay.startOf(view).toString(fetchDateFormat),
    selectedDay.endOf(view).toString(fetchDateFormat));
  };

  return (
    <div className="redux__task__calendar__header__date__nav">
      <button className="redux__task__calendar__header__date__nav__button"
        onClick={() => viewChangedEventAction(decrement, viewType)}>
        <i>{'<'}</i>
      </button>
      <button className="redux__task__calendar__header__date__nav__button"
        onClick={() => viewChangedEventAction(increment, viewType)}>
        <i>{'>'}</i>
      </button>
      <button className="redux__task__calendar__header__date__nav__button"
        onClick={() => viewChangedEventAction(selectToday, viewType)}>Today</button>
    </div>
	);
};

HeaderDateNav.propTypes = {
  viewType: PropTypes.string.isRequired,
  selectedDay: PropTypes.object.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  selectToday: PropTypes.func,
  fetchDateFormat: PropTypes.func,
  retrieveDataAction: PropTypes.func
};

export default HeaderDateNav;
