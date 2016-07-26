import { connect } from 'react-redux';
import  AsideTimes  from './../components/AsideTimes';
import {augmentTimes} from './../utils/calendarUtils';
import { config } from './../utils/configValues';

function mapStateToProps(state) {
    return {
        times: augmentTimes(config, 'times__column__item ')
    }
}

export default connect(mapStateToProps)(AsideTimes);
