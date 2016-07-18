import { connect } from 'react-redux'
import  WeekDay  from './../components/WeekDay';
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

function mapStateToProps(state, ownProps) {
    return {
        times: getTimesForDay(state.calendarConfig),
        dayName: ownProps.date.format('dddd')
    }
}

export default connect(mapStateToProps)(WeekDay);