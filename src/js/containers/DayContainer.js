/**
 * Created by reharik on 5/30/16.
 */

import { connect } from 'react-redux'
import {buildDayWithTasks} from './../utils/calendarUtils';
import { bindActionCreators } from 'redux'
import Day from './../components/Day'
import {selectSlot, selectTask} from './../actions/eventActions';

function mapStateToProps(state) {
    return {
        formattedDay: buildDayWithTasks(state.selectedDay, state.tasks, state.calendarConfig)
    };
}

function mapDispatchToProps(dispatch) {
    return ({actions: bindActionCreators({selectSlot, selectTask}, dispatch)})
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);
