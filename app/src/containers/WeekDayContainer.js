import { connect } from 'react-redux'
import  WeekDay  from './../components/WeekDay';
import moment from 'moment';
import {process} from './../utils/widthAndColumn';
import {selectSlot, selectTask} from './../actions/eventActions';
import {amendTasks} from './../utils/calendarUtils';

var getTimesForDay = function(config, view, day){
    var thisView = view === 'week' ? 'week__' : '';
    var result = [];
    var start = config.startDay.clone();
    var hourMoment = moment().startOf('hour');
    while(start.isBefore(config.endDay,'minutes', '[)')){
        var isHour = start.format("mm") === hourMoment.format("mm");
        var classes = thisView + 'day__items__slot ';
        classes = isHour ? classes + thisView +'hour__breaks' : classes;
        result.push({time:start.format("h:mm A"), isHour, classes});
        start.add(config.increment, 'minutes');
    }
    return result;
};

function mapStateToProps(state, ownProps) {
    var day = ownProps.date || state.selectedDate || moment();
    var filterToday = x => moment(x.date).format('YYYYMMDD') === day.format('YYYYMMDD');
    return {
        view: state.calendarView.view,
        tasks: process(state.tasks.filter(filterToday)),
        times: getTimesForDay(state.calendarConfig, state.calendarView.view, day),
        dayName: day.format('dddd'),
        isToday: day.isSame(moment(), 'day')
    }
}

export default connect(mapStateToProps, { selectSlot, selectTask })(WeekDay);