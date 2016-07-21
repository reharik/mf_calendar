/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import Month from './../components/Month'
import Calendar from 'node-calendar'
import {amendTasks} from './../utils/calendarUtils'

function mapStateToProps(state) {
    var tasks = amendTasks(state.tasks, state.calendarConfig.increment);
    var weeks = new Calendar
        .Calendar(Calendar.SUNDAY)
        .monthdatescalendar(state.displayed.year, state.displayed.monthIndex);
    return {
        displayed: state.displayed,
        weeks
    }
}

export default connect(mapStateToProps)(Month);
