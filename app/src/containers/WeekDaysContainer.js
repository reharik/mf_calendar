import { connect } from 'react-redux'
import  WeekDays  from './../components/WeekDays'
import Calendar from 'node-calendar'
import moment from 'moment';

var getWeek = function(day) {
    var calendar = new Calendar.Calendar(Calendar.SUNDAY);
    var week = calendar.monthdatescalendar(day.year, day.monthIndex)
        .filter(week => week.some(date=> moment(date).isSame(day.date, 'day')));
    return week ? week[0].map(x=>moment(x)) : [];
};

function mapStateToProps(state) {
    return {
        week: getWeek(state.selectedDay)
    }
}

export default connect(mapStateToProps)(WeekDays);