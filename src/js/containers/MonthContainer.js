/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Month from './../components/Month'
import Calendar from 'node-calendar'
import {dateToMoment} from './../utils/calendarUtils'
import {selectDay} from './../actions/calendarActions';
import moment from 'moment'

var matchedEvents = (tasks,date) => tasks.filter(e => e.moment.isSame(moment(date), 'day'));

function mapStateToProps(state) {
    var calendar = new Calendar.Calendar(Calendar.SUNDAY);
    var days = calendar.monthdatescalendar(state.displayed.year, state.displayed.monthIndex)
        .map(week => week.map(date => {
            var day = dateToMoment(date);
            day.tasks = matchedEvents(state.tasks, date); 
            return day}));
    return {
        today: state.today,
        displayed: state.displayed,
        selectedDay: state.selectedDay,
        days
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectDay }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);
