import { connect } from 'react-redux';
import AsideTimes from '../components/AsideTimes';
import {augmentTimes} from '../utils/calendarUtils';

function mapStateToProps() {
  return {
    times: augmentTimes('redux__task__calendar__times__column__item ')
  };
}

export default connect(mapStateToProps)(AsideTimes);
