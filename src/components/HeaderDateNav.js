import React, { PropTypes } from 'react';

const HeaderDateNav = ({viewType,
                        increment,
                        decrement,
                        selectToday,
                        retrieveDataArguments,
                        actions,
                      }) => {
  const viewChangedEventAction = (func, view) => {
    func(view);
    const _args = retrieveDataArguments(view);
    actions.retrieveDataAction(..._args)
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
  increment: PropTypes.func,
  decrement: PropTypes.func,
  selectToday: PropTypes.func,
  retrieveDataArgument: PropTypes.func,
  actions: PropTypes.object
};

export default HeaderDateNav;
