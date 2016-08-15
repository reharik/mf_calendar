import { connect } from 'react-redux';
import Calendar from './../components/Calendar';
import { updateConfigs } from './../utils/configValues';

function mapStateToProps(state, ownProps) {
  const calendarConfig = updateConfigs(ownProps.config);
  return {
    calendarView: state.calendarView || calendarConfig.defaultView,
    calendarConfig,
    calendarDate: state.calendarDate
  };
}

export default connect(mapStateToProps)(Calendar);
