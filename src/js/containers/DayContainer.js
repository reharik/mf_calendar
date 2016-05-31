/**
 * Created by reharik on 5/30/16.
 */

import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import Day from './../components/Day'

var matchedEvents = (events,day) => events.filter(e => e.moment.isSame(day, 'day'));

function mapStateToProps(state) {
    var _day = state.selectedDay;
    var day = {..._day, tasks: matchedEvents(state.events, _day)};

    var timeStrings = ["All Day", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm"];
    var formattedDay = timeStrings.map(time => {
        return {
            time,
            tasks: day.tasks.filter(task => task.hour == time)
            }
    });
    return {
        dayOfWeek: day.date.format('dddd'),
        formattedDay
    };
}

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({ incrementMonth, decrementMonth, selectDay }, dispatch)
//}

export default connect(mapStateToProps)(Day);
