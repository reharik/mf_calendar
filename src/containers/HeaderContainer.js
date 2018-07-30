import { connect } from 'react-redux';
import Header from '../components/Header';
import { formatHeaderDisplay } from '../utils/calendarUtils';
import {selectToday, viewChangedEvent, incrementDate, decrementDate} from '../modules/calendarModule';


function mapStateToProps(state, ownProps) {
  const calState = state.reduxTaskCalendar[ownProps.calendarName];

  const retrieveDataAction = (view) => {
    let start = calState.date.startOf(view).toString(calState.config.fetchDateFormat);
    let end = calState.date.endOf(view).toString(calState.config.fetchDateFormat);
    if(view === 'week') {

    }
    return calState.config.retrieveDataAction(
      start,
      end,
    );
  };

  return {
    calendarName: ownProps.calendarName,
    calendarView: calState.view,
    selectedDay: calState.date,
    hideViewMenu: calState.config.hideViewMenu,
    hideDateNav: calState.config.hideDateNav,
    caption: formatHeaderDisplay(calState.date, calState.view, calState.config),
    retrieveDataAction};
}

export default connect(mapStateToProps, {selectToday, viewChangedEvent, incrementDate, decrementDate})(Header);
