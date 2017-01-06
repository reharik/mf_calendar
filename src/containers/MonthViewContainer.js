import { connect } from 'react-redux';
import MonthView from '../components/MonthView';
import Calendar from 'node-calendar';

function mapStateToProps(state, ownProps) {
  var weeks = new Calendar
    .Calendar(Calendar.SUNDAY)
    .monthdatescalendar(state[ownProps.calendarConfig.calendarName].date.year(),
      state[ownProps.calendarConfig.calendarName].date.month() + 1);
  return {
    weeks,
    calendarConfig: ownProps.calendarConfig,
    actions: ownProps.actions
  };
}

export default connect(mapStateToProps)(MonthView);
