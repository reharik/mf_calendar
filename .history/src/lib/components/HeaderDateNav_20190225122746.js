import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

const HeaderDateNav = ({viewType,
                        dayChanged,
                        selectedDay,
                      }) => {

  const nav = (navType) => {
    switch (navType) {
      case 'increment': {
        dayChanged(moment(selectedDay).add(1, viewType));
        break;
      }
      case 'decrement': {
        dayChanged(moment(selectedDay).subtract(1, viewType));
        break;
      }
      default: {
        dayChanged(moment());
      }
    }
  };

  return (
    <div className="redux__task__calendar__header__date__nav">
      <button className="redux__task__calendar__header__date__nav__button"
        onClick={() => nav('decrement')}>
        <i>{'<'}</i>
      </button>
      <button className="redux__task__calendar__header__date__nav__button"
        onClick={() => nav('increment')}>
        <i>{'>'}</i>
      </button>
      <button className="redux__task__calendar__header__date__nav__button"
        onClick={() => nav('selectToday')}>Today</button>
    </div>
	);
};

HeaderDateNav.propTypes = {
  viewType: PropTypes.string.isRequired,
  selectedDay: PropTypes.string.isRequired,
  dayChanged: PropTypes.func.isRequired,
};

export default HeaderDateNav;