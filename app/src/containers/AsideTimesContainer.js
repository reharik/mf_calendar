import { connect } from 'react-redux';
import  AsideTimes  from './../components/AsideTimes';
import {augmentTimes} from './../utils/calendarUtils';

function mapStateToProps(state) {
    return {
        times: augmentTimes(state.calendarConfig, 'times__column__item ')
    }
}

export default connect(mapStateToProps)(AsideTimes);
