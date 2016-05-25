/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import Month from './../components/Month'
import calendar from 'node-calendar'
import {dateToMoement} from './../utils/calendarUtils'
import {incrementMonth, decrementMonth, selectDay} from './../actions/calendarActions';

var matchedEvents = (events,date) => events.filter(e => e.moment.isSame(moment(date), 'day'));

function mapStateToProps(state) {
    var days = calendar.monthdatescalendar(state.displayed.year, state.displayed.monthIndex)
        .map(item => item.map(date => {
            var day = dateToMoement(date);
            day.tasks = matchedEvents(state.events, date); 
            return day}));

    return {
        today: state.today,
        displayed: state.displayed,
        selectedDay: state.selectedDay,
        days
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ incrementMonth, decrementMonth, selectDay }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);
