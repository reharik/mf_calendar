import { connect } from 'react-redux';
import DayView from '../components/DayView';
import { augmentTimes } from '../utils/calendarUtils';

function mapStateToProps(state, ownProps) {
  const times = augmentTimes('redux__task__calendar__times__column__item ', undefined, ownProps.calendarConfig);
  return {
    times,
    calendarConfig: ownProps.calendarConfig,
    actions: ownProps.actions
  };
}

export default connect(mapStateToProps)(DayView);
