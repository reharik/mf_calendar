/**
 * Created by reharik on 5/30/16.
 */

import { connect } from 'react-redux'
import Calendar from './../components/Calendar'
import defaultConfigs from './../defaultConfigs';
import {CONFIGURE_CALENDAR} from './../constants/actionConstants'

function mapStateToProps(state, ownProps) {
    var calendarConfig = Object.assign({}, defaultConfigs, ownProps.config);
    return {
        calendarView: state.calendarView || calendarConfig/defaultView,
        calendarConfig
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    var calendarConfig = Object.assign({}, defaultConfigs, ownProps.config);
    dispatch({type:CONFIGURE_CALENDAR, config: calendarConfig});
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
