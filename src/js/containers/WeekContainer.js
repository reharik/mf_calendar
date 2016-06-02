/**
 * Created by rharik on 5/31/16.
 */

import { connect } from 'react-redux'
import {getWeek, dateToMoment,buildDayWithTasks} from './../utils/calendarUtils';
//import { bindActionCreators } from 'redux'
import Week from './../components/Week'

function mapStateToProps(state) {
    return {
        week: getWeek(state.selectedDay),
        tasks: state.tasks,
        config: state.calendarConfig
    };
}

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({ incrementMonth, decrementMonth, selectDay }, dispatch)
//}

export default connect(mapStateToProps)(Week);
