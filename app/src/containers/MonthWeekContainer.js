
import { connect } from 'react-redux'
import MonthWeek from './../components/MonthWeek'
import {selectSlot, selectTask} from './../actions/eventActions';
import moment from 'moment';

function mapStateToProps(state, ownProps) {

    var	buildClasses = function(day, today, selectedDay, displayed, index) {

        var classes = "month__day";
        if (today.isSame(day, 'day')) {
            classes += ' month__day__today';
        }

        if (selectedDay.isSame(day, 'day')) {
            classes += ' month__day__selected';
        }
        if ((index + 1) % 7 == 0) {
            classes += ' month__day__last';
        }

        if (day.month() != selectedDay.month()) {
            classes += ' month__day__otherMonth';
        }
        return classes;
    };

    var weekDays = week => week.map((date, idx) => {
        var day = moment(date);
            day.classes = buildClasses(day, moment(), state.selectedDay, state.displayed, idx);
            day.tasks = state.tasks.filter(e => e.date.isSame(day, 'day'));
            return day});
    return {
        weekDays: weekDays(ownProps.week)
    };
}

export default connect(mapStateToProps, {selectSlot, selectTask})(MonthWeek);
