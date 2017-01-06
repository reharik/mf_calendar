import { connect } from 'react-redux';
import WeekView from '../components/WeekView';
import { augmentTimes, getWeek } from '../utils/calendarUtils';

function mapStateToProps(state, ownProps) {
  const times = augmentTimes('redux__task__calendar__times__column__item ', undefined, ownProps.calendarConfig);
  const week = getWeek(state[ownProps.calendarConfig.calendarName].date);
  return {
    times,
    week,
    calendarConfig: ownProps.calendarConfig,
    actions: ownProps.actions
  };
}

export default connect(mapStateToProps)(WeekView);
