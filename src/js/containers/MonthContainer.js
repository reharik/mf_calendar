/**
 * Created by rharik on 5/25/16.
 */

import { connect } from 'react-redux'
import Month from './../components/Month'

function mapStateToProps(state) {
    return {
        today: state.today,
        displayed: state.displayed,
        selectedDay: state.selectedDay
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ incrementMonth, decrementMonth, selectDay }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);

