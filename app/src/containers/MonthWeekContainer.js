
import { connect } from 'react-redux'
import MonthWeek from './../components/MonthWeek'
import {dateToMoment} from './../utils/calendarUtils'
import {selectSlot, selectTask} from './../actions/eventActions';


function mapStateToProps(state, ownProps) {

    var	buildClasses = function(day, today, selectedDay, displayed, index) {
        var classes = "month__day";
        if (today.date.isSame(day.date, 'day')) {
            classes += ' month__day__today';
        }

        if (selectedDay.date.isSame(day.date, 'day')) {
            classes += ' month__day__selected';
        }
        if ((index + 1) % 7 == 0) {
            classes += ' month__day__last';
        }

        if (day.month != displayed.month) {
            classes += ' month__day__otherMonth';
        }
        return classes;
    };

    //TODO this should be done in the reducer

    var weekDays = week => week.map((date, idx) => {
        var day = dateToMoment(date);
            day.classes = buildClasses(day, state.today, state.selectedDay, state.displayed, idx);
            day.tasks = state.tasks.filter(e => e.date.isSame(day.date, 'day'));
            return day});
    return {
        weekDays: weekDays(ownProps.week)
    };
}

export default connect(mapStateToProps, {selectSlot, selectTask})(MonthWeek);
