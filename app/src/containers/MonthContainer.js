import { connect } from 'react-redux';
import Month from './../components/Month';
import Calendar from 'node-calendar';

function mapStateToProps(state) {
  var weeks = new Calendar
    .Calendar(Calendar.SUNDAY)
    .monthdatescalendar(state.calendarDate.year(), state.calendarDate.month() + 1);
  return {
    weeks
  };
}

export default connect(mapStateToProps)(Month);
