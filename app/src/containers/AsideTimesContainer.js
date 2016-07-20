import { connect } from 'react-redux';
import  AsideTimes  from './../components/AsideTimes';
import moment from 'moment';

var getTimesForDay = function(config){
    var result = [];
    var start = config.startDay.clone();
    var hourMoment = moment().startOf('hour');
    while(start.isBefore(config.endDay,'minutes', '[)')) {
        var isHour = start.format("mm") === hourMoment.format("mm");
        var classes = 'times__column__item ';
        classes = isHour ? classes + 'hour__breaks' : classes;
        result.push({time: start.format("h:mm A"), display: isHour ? start.format("h:mm A") : ' ', isHour, classes});
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
