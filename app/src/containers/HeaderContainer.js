
import { connect } from 'react-redux';
import Header from './../components/Header';
import { selectToday, viewChangedEvent, incrementDate, decrementDate} from './../actions/calendarActions';
import { formatHeaderDisplay } from './../utils/calendarUtils';
import { config } from './../utils/configValues';

function mapStateToProps(state) {
  return {
    calendarView: state.calendarView.view,
    selectedDay: state.selectedDay,
    caption: formatHeaderDisplay(state.selectedDay, state.calendarView.view),
    config,
    selectToday, viewChangedEvent, incrementDate, decrementDate
  };
}

export default connect(mapStateToProps)(Header);
