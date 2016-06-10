/**
 * Created by rharik on 5/31/16.
 */

import { connect } from 'react-redux'
import {getWeek, amendTasks} from './../utils/calendarUtils';
import { bindActionCreators } from 'redux'
import Week from './../components/Week'
import {selectSlot, selectTask} from './../actions/eventActions';


function mapStateToProps(state) {
    return {
        week: getWeek(state.selectedDay),
        tasks: amendTasks(state.tasks, state.calendarConfig.increment),
        config: state.calendarConfig
    };
}

function mapDispatchToProps(dispatch) {
    return ({actions: bindActionCreators({selectSlot, selectTask}, dispatch)})
}

export default connect(mapStateToProps, mapDispatchToProps)(Week);
