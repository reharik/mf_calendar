import React, {Component} from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import defaultValues from '../utils/configValues';
import { bindActionCreators } from 'redux'
import { setConfig, NO_OP } from './../modules/calendarModule';

class CalendarContainer extends Component {
  componentWillMount() {
    const config = {
      ...this.props.config,
      retrieveDataAction: this.props.retrieveDataAction,
      updateTaskViaDND: this.props.updateTaskViaDND
    };
    this.props.retrieveDataAction();
    this.props.setConfig(config);
  }

  render() {
    if (!this.props.calendarView) {
      return null;
    }
    return (<Calendar {...this.props} />);
  }
}

function mapStateToProps(state, ownProps) {
  const calState = state.reduxTaskCalendar && state.reduxTaskCalendar[ownProps.config.calendarName];
  if(!calState) { return {}; }

  const calendarConfig = {...defaultValues, ...ownProps.config};

  return {
    calendarView: calState.View || calendarConfig.defaultView,
    width: calendarConfig.width,
    calendarDate: calState.Date,
    calendarName: calState.config.calendarName

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const calendarConfig = {...defaultValues, ...ownProps.config};
  const noopFunc = () => {
    return {type: NO_OP};
  };

  const wrapWithConfig = (action) => {
    return function () {
      let wrappedAction = action.apply(undefined, arguments);
      wrappedAction.calendarName = calendarConfig.calendarName;
      return wrappedAction;
    }
  };

  return bindActionCreators({
    setConfig,
    updateTaskViaDND: wrapWithConfig(ownProps.config.updateTaskViaDND || noopFunc),
    retrieveDataAction: wrapWithConfig(ownProps.config.retrieveDataAction || noopFunc)
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
