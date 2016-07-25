import React from 'react';
import { connect } from 'react-redux'
import Calendar from './../components/Calendar'
import defaultConfigs from './../defaultConfigs';
import { CONFIGURE_CALENDAR } from './../constants/actionConstants'
import './../../sass/index.css'

function mapStateToProps(state, ownProps) {
    var calendarConfig = Object.assign({}, defaultConfigs, ownProps.config);
    return {
        calendarView: state.calendarView || calendarConfig.defaultView,
        calendarConfig
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    var calendarConfig = Object.assign({}, defaultConfigs, ownProps.config);
    dispatch({type:CONFIGURE_CALENDAR, config: calendarConfig});
    return {};
}

//
// Calendar.getChildContext = function() {
//     return {color: "purple"};
// };

// Calendar.childContextTypes = {
//     color: React.PropTypes.string
// };

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
