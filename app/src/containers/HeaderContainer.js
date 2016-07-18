
import { connect } from 'react-redux'
import Header from './../components/Header'
import { selectToday, viewChangedEvent, incrementDate, decrementDate} from './../actions/calendarActions';
import { formatHeaderDisplay } from './../utils/calendarUtils'

function mapStateToProps(state) {
    return {
        calendarView: state.calendarView.view,
        caption: formatHeaderDisplay(state.displayed, state.calendarView.view).display
    }
}

export default connect(mapStateToProps, { selectToday, viewChangedEvent, incrementDate, decrementDate })(Header);
