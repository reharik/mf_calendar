import { connect } from 'react-redux'
import { WeekDay } from './../components/WeekDay'

var getTimesForDay = function(config){
    var result = [];
    while(config.startDay.isBefore(config.endDay,'minutes', '[)')){
        result.push(config.startDay.format("h:mm A"))
        config.startDay.add(config.increment, 'minutes');
    }
    return result;
};

function mapStateToProps(state, ownProps) {
    return {
        times: state.calendarConfig,
        dayName: ownProps.date.format('dddd')
    }
}

export default connect(mapStateToProps)(WeekDay);