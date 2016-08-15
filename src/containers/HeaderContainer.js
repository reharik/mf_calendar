
import { connect } from 'react-redux';
import Header from '../components/Header';
import { selectToday, incrementDate, decrementDate} from '../modules/dates';
import { viewChangedEvent } from '../modules/view';
import { formatHeaderDisplay } from '../utils/calendarUtils';
import { config } from '../utils/configValues';

function mapStateToProps(state) {
  return {
    calendarView: state.calendarView,
    selectedDay: state.calendarDate,
    caption: formatHeaderDisplay(state.calendarDate, state.calendarView),
    config,
    selectToday, viewChangedEvent, incrementDate, decrementDate
  };
}

export default connect(mapStateToProps)(Header);
