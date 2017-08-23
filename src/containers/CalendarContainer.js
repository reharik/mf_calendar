import React, {Component} from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import defaultValues from '../utils/configValues';
import { bindActionCreators } from 'redux'
import { setConfig, NO_OP } from './../modules/calendarModule';

class CalendarContainer extends Component {
  componentWillMount() {
    const config = {
      ...defaultValues,
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
  const noopFunc = () => {
    return {type: NO_OP};
  };

  let props = {
    retrieveDataAction:ownProps.config.retrieveDataAction || noopFunc,
    updateTaskViaDND:ownProps.config.updateTaskViaDND || noopFunc
  };

  if(!calState) { return props; }

  props =  {...props,
    calendarView: calState.view || calState.config.defaultView,
    width: calState.config.width,
    calendarName: calState.config.calendarName,
  };

  return props;
}

function mapDispatchToProps(dispatch, ownProps) {
  const noopFunc = () => {
    return {type: NO_OP};
  };

  var actions = {
    setConfig
  };

  if(ownProps.config.retrieveDataAction
    && !ownProps.config.retrieveDataAction.toString().includes('dispatch(')){
    actions.retrieveDataAction = ownProps.config.retrieveDataAction || noopFunc;
  }

  if(ownProps.config.updateTaskViaDND
    && !ownProps.config.updateTaskViaDND.toString().includes('dispatch(')){
    actions.updateTaskViaDND = ownProps.config.updateTaskViaDND || noopFunc;
  }

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
