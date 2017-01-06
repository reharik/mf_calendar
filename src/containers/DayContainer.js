import { connect } from 'react-redux';
import Day from '../components/Day';
import moment from 'moment';
import {process} from '../utils/widthAndColumn';
import {augmentTimes} from '../utils/calendarUtils';
import {openSpaceClickedAction, taskClickedAction} from './../modules/calendarModule'

function mapStateToProps(state, ownProps) {
  const calState = state.reduxTaskCalendar[ownProps.calendarName];
  var day = ownProps.date || calState.date || moment();
  var filterToday = x => moment(x.date).format('YYYYMMDD') === day.format('YYYYMMDD');
  var thisView = calState.view === 'week' ? 'redux__task__calendar__week__' : 'redux__task__calendar__';
  var classes = thisView + 'day__items__slot ';
  var tasks = process(state.reduxTaskCalendar[calState.config.dataSource].filter(filterToday));

  return {
    view: calState.view,
    tasks,
    times: augmentTimes(classes, day, calState.config),
    dayName: day.format('dddd'),
    isToday: day.format('YYYYMMDD') === moment().format('YYYYMMDD'),
    calendarName: ownProps.calendarName,
    updateTaskViaDND: calState.config.updateTaskViaDND
  };
}

export default connect(mapStateToProps, {openSpaceClickedAction, taskClickedAction})(Day);
