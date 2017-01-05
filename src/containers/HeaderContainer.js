import { connect } from 'react-redux';
import Header from '../components/Header';
import { selectToday, incrementDate, decrementDate} from '../modules/dates';
import { viewChangedEvent } from '../modules/view';
import { formatHeaderDisplay } from '../utils/calendarUtils';
import { config } from '../utils/configValues';

function mapStateToProps(state, ownProps) {
  const retrieveDataArguments = (view) => ({
    start: state.calendarDate.startOf(view).toString(ownProps.calendarConfig.fetchDateFormat),
    end: state.calendarDate.endOf(view).toString(ownProps.calendarConfig.fetchDateFormat)
  });

  return {
    calendarView: state.calendarView,
    selectedDay: state.calendarDate,
    caption: formatHeaderDisplay(state.calendarDate, state.calendarView),
    retrieveDataArguments,
    calendarConfig: ownProps.calendarConfig,
    actions: ownProps.actions
  };
}

export default connect(mapStateToProps, {selectToday, viewChangedEvent, incrementDate, decrementDate})(Header);
