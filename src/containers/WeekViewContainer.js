import { connect } from 'react-redux';
import WeekView from '../components/WeekView';
import { augmentTimes, getWeek } from '../utils/calendarUtils';

function mapStateToProps(state, ownProps) {
  const calState = state.reduxTaskCalendar[ownProps.calendarName];
  const times = augmentTimes('redux__task__calendar__times__column__item ', undefined, calState.config);

  const week = getWeek(calState.date, calState.config);
  return {
    times,
    week,
    calendarName: ownProps.calendarName,
    startOfWeek: calState.date.startOf('week').startOf('day').toISOString(),
    endOfWeek: calState.date.endOf('week').endOf('day').toISOString()
  };
}

export default connect(mapStateToProps)(WeekView);
