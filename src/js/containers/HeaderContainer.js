/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './../components/Header'
import { selectToday, viewChangedEvent, incrementDate, decrementDate} from './../actions/calendarActions';
import { formatHeaderDisplay } from './../utils/calendarUtils'

function mapStateToProps(state) {
    return {
        calendarView: state.calendarView.view,
        caption: formatHeaderDisplay(state.displayed, state.calendarView.view).display
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectToday, viewChangedEvent, incrementDate, decrementDate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
