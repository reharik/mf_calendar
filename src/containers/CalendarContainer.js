import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { updateConfigs } from '../utils/configValues';
import initialize  from '../utils/initialize';

function mapStateToProps(state, ownProps) {
  const calendarConfig = updateConfigs(ownProps.config);

  return {
    calendarView: state.calendarView || calendarConfig.defaultView,
    calendarConfig,
    calendarDate: state.calendarDate
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  initialize(dispatch, ownProps);
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
