/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import Header from './../components/Header'
import { selectToday, viewChangedEvent} from './../actions/calendarActions';

function mapStateToProps(state) {
    return {
        calendarButtonState: state.calendarButtonState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectToday, viewChangedEvent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
