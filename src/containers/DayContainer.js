import { connect } from 'react-redux';
import Day from '../components/Day';
import moment from 'moment';
import {process} from '../utils/widthAndColumn';
import {augmentTimes} from '../utils/calendarUtils';

function mapStateToProps(state, ownProps) {
  var day = ownProps.date || state.calendarDate || moment();
  var filterToday = x => moment(x.date).format('YYYYMMDD') === day.format('YYYYMMDD');
  var thisView = state.calendarView === 'week' ? 'redux__task__calendar__week__' : 'redux__task__calendar__';
  var classes = thisView + 'day__items__slot ';
  var tasks = process(state.calendarTasks.filter(filterToday));

  return {
    view: state.calendarView,
    tasks,
    times: augmentTimes(classes, day, ownProps.calendarConfig),
    dayName: day.format('dddd'),
    isToday: day.format('YYYYMMDD') === moment().format('YYYYMMDD'),
    actions: ownProps.actions,
    calendarConfig: ownProps.calendarConfig
  };
}

export default connect(mapStateToProps)(Day);
