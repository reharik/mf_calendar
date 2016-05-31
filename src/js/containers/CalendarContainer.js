/**
 * Created by reharik on 5/30/16.
 */

import { connect } from 'react-redux'
import Calendar from './../components/Calendar'

function mapStateToProps(state) {
    return  state.calendarView;
}

export default connect(mapStateToProps)(Calendar);
