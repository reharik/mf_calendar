import { connect } from 'react-redux';
import  AsideTimes  from './../components/AsideTimes';
import moment from 'moment';

var getTimesForDay = function(config){
    var result = [];
    var start = config.startDay.clone();
    while(start.isBefore(config.endDay,'minutes', '[)')){
        result.push(start.format("h:mm A"))
        start.add(config.increment, 'minutes');
    }
    return result;
};

function mapStateToProps(state) {
    return {
        times: getTimesForDay(state.calendarConfig)
    }
}

export default connect(mapStateToProps)(AsideTimes);
