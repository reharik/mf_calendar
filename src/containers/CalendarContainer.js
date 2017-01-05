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
  const calendarConfig = {...defaultValues, ...ownProps};

  return {
    calendarView: state.calendarView || calendarConfig.defaultView,
    calendarConfig,
    calendarDate: state.calendarDate
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {actions: bindActionCreators({
    retrieveDataAction: ownProps.retrieveDataAction || () => { return {type: NO_OP} },
    taskClickedAction: ownProps.taskClickedAction || () => { return {type: NO_OP} },
    openSpaceClickedAction: ownProps.openSpaceClickedAction || () => { return {type: NO_OP} },
    updateTaskViaDND: ownProps.updateTaskViaDND || () => { return {type: NO_OP} }
  }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
