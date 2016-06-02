/**
 * Created by reharik on 5/30/16.
 */

import { connect } from 'react-redux'
import {buildDayWithTasks} from './../utils/calendarUtils';
//import { bindActionCreators } from 'redux'
import Day from './../components/Day'

function mapStateToProps(state) {
    return {
        formattedDay: buildDayWithTasks(state.selectedDay, state.tasks, state.calendarConfig)
    };
}

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({ incrementMonth, decrementMonth, selectDay }, dispatch)
//}

export default connect(mapStateToProps)(Day);
