import React, { PropTypes } from 'react';

const HeaderDateNav = ({viewType, selectedDay, config, increment, decrement, selectToday, dispatch}) => {
  const viewChangedEventAction = (func, view) => {
    dispatch(func(view));
    config.retrieveDataAction(selectedDay.startOf(view).toString(config.fetchDateFormat),
    selectedDay.endOf(view).toString(config.fetchDateFormat),
    dispatch);
  };

  return (
    <div className="header__date__nav">
      <button className="header__date__nav__button"
        onClick={() => viewChangedEventAction(decrement, viewType)}>
        <i>{'<'}</i>
      </button>
      <button className="header__date__nav__button"
        onClick={() => viewChangedEventAction(increment, viewType)}>
        <i>{'>'}</i>
      </button>
      <button className="header__date__nav__button"
        onClick={() => viewChangedEventAction(selectToday, viewType)}>Today</button>
    </div>
	);
};

HeaderDateNav.propTypes = {
  viewType: PropTypes.string.isRequired,
  selectedDay: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  selectToday: PropTypes.func,
  dispatch: PropTypes.func
};

export default HeaderDateNav;
