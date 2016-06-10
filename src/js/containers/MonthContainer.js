/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Month from './../components/Month'
import Calendar from 'node-calendar'
import {dateToMoment, amendTasks, matchedEvents} from './../utils/calendarUtils'
import {selectSlot, selectTask} from './../actions/eventActions';

function mapStateToProps(state) {
    var calendar = new Calendar.Calendar(Calendar.SUNDAY);
    var tasks = amendTasks(state.tasks, state.calendarConfig.increment);
    var days = calendar.monthdatescalendar(state.displayed.year, state.displayed.monthIndex)
        .map(week => week.map(date => {
            var day = dateToMoment(date);
            day.tasks = matchedEvents(date, tasks);
            return day}));
    return {
        today: state.today,
        displayed: state.displayed,
        selectedDay: state.selectedDay,
        days
    }
}

function mapDispatchToProps(dispatch) {
    return ({actions: bindActionCreators({selectSlot, selectTask}, dispatch)})
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);
