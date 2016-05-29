/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './../components/Header'
import { selectToday, viewChangedEvent, incrementDate, decrementDate} from './../actions/calendarActions';

function mapStateToProps(state) {
    return {
        calendarView: state.calendarView,
        displayed: state.displayed
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectToday, viewChangedEvent, incrementDate, decrementDate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
