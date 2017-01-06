
import { connect } from 'react-redux';
import MonthWeek from '../components/MonthWeek';
import moment from 'moment';
import { config } from '../utils/configValues';
import {openSpaceClickedAction, taskClickedAction} from './../modules/calendarModule'

function mapStateToProps(state, ownProps) {

  var	buildClasses = function(day, today, selectedDay, index) {

    var classes = 'redux__task__calendar__month__day';
    if (today.isSame(day, 'day')) {
      classes += ' redux__task__calendar__month__day__today';
    }

    if (selectedDay.isSame(day, 'day')) {
      classes += ' redux__task__calendar__month__day__selected';
    }
    if ((index + 1) % 7 === 0) {
      classes += ' redux__task__calendar__month__day__last';
    }

    if (day.month() !== selectedDay.month()) {
      classes += ' redux__task__calendar__month__day__otherMonth';
    }
    return classes;
  };

  const calState = state.reduxTaskCalendar[ownProps.calendarName];

  var weekDays = week => week.map((date, idx) => {
    var day = moment(date);
    day.classes = buildClasses(day, moment(), calState.date, idx);
    day.tasks = state[calState.config.dataSource].filter(e =>moment(e.date).isSame(day, 'day'));
    return day;});
  return {
    weekDays: weekDays(ownProps.week),
    calendarName: ownProps.calendarName,
    fetchDateFormat: calState.config.fetchDateFormat,
    dayStartsAt: calState.config.dayStartsAt
  };
}

export default connect(mapStateToProps, {openSpaceClickedAction, taskClickedAction})(MonthWeek);
