import { connect } from 'react-redux';
import Header from '../components/Header';
import { selectToday, incrementDate, decrementDate} from '../modules/dates';
import { viewChangedEvent } from '../modules/view';
import { formatHeaderDisplay } from '../utils/calendarUtils';
import { config } from '../utils/configValues';

function mapStateToProps(state, ownProps) {
  const thisState = state[ownProps.calendarConfig.calendarName];
  const retrieveDataArguments = (view) => ({
    start: thisState.date.startOf(view).toString(ownProps.calendarConfig.fetchDateFormat),
    end: thisState.date.endOf(view).toString(ownProps.calendarConfig.fetchDateFormat)
  });

  return {
    calendarView: thisState.view,
    selectedDay: thisState.date,
    caption: formatHeaderDisplay(thisState.date, thisState.view),
    retrieveDataArguments,
    calendarConfig: ownProps.calendarConfig,
    actions: ownProps.actions
  };
}

export default connect(mapStateToProps, {selectToday, viewChangedEvent, incrementDate, decrementDate})(Header);
