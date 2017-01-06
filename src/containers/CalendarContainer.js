import React, {Component} from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import defaultValues from '../utils/configValues';
import { bindActionCreators } from 'redux'
import { NO_OP } from '../constants/constants';

class CalendarContainer extends Component {
  componentWillMount() { this.loadData(); }

  loadData() {
    this.props.actions.retrieveDataAction()
  }

  render() {
    return (<Calendar {...this.props} />);
  }
}
function mapStateToProps(state, ownProps) {
  const calendarConfig = {...defaultValues, ...ownProps.config};

  return {
    calendarView: state[calendarConfig.calendarName].View || calendarConfig.defaultView,
    calendarConfig,
    calendarDate: state[calendarConfig.calendarName].Date
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
      wrappedAction.config = calendarConfig;
      return wrappedAction;
    }
  };
  return {
    actions: bindActionCreators({
      retrieveDataAction: wrapWithConfig(ownProps.actions.retrieveDataAction || noopFunc),
      taskClickedAction: wrapWithConfig(ownProps.actions.taskClickedAction || noopFunc),
      openSpaceClickedAction: wrapWithConfig(ownProps.actions.openSpaceClickedAction || noopFunc),
      updateTaskViaDND: wrapWithConfig(ownProps.actions.updateTaskViaDND || noopFunc)
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
