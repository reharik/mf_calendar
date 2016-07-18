import { connect } from 'react-redux'
import { AsideTimes } from './../components/AsideTimes'

var getTimesForDay = function(config){
    var result = [];
    while(config.startDay.isBefore(config.endDay,'minutes', '[)')){
        result.push(config.startDay.format("h:mm A"))
        config.startDay.add(config.increment, 'minutes');
    }
    return result;
};

function mapStateToProps(state) {
    return {
        times: state.calendarConfig
    }
}

export default connect(mapStateToProps)(AsideTimes);
