import { connect } from 'react-redux';
import Header from '../components/Header';
import { selectToday, incrementDate, decrementDate} from '../modules/dates';
import { viewChangedEvent } from '../modules/view';
import { formatHeaderDisplay } from '../utils/calendarUtils';
import { config } from '../utils/configValues';
import { bindActionCreators } from 'redux'

function mapStateToProps(state, ownProps) {
  return {
    calendarView: state.calendarView,
    selectedDay: state.calendarDate,
    caption: formatHeaderDisplay(state.calendarDate, state.calendarView),
    calendarConfig: ownProps.calendarConfig
  };
}

export default connect(mapStateToProps, {selectToday, viewChangedEvent, incrementDate, decrementDate})(Header);
