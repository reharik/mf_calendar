/**
 * Created by reharik on 5/30/16.
 */

import { connect } from 'react-redux'
import {buildDayWithTasks, amendTasks} from './../utils/calendarUtils';
import { bindActionCreators } from 'redux'
import Day from '../components/Day2'
import {selectSlot, selectTask} from './../actions/eventActions';


function mapStateToProps(state) {
    return {
        formattedDay: buildDayWithTasks(state.selectedDay, amendTasks(state.tasks, state.calendarConfig.increment), state.calendarConfig)
    };
}

function mapDispatchToProps(dispatch) {
    return ({actions: bindActionCreators({selectSlot, selectTask}, dispatch)})
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);
