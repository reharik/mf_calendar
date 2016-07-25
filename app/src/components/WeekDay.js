import React from 'react'
import  WeekDayName from './../components/WeekDayName';
import  Tasks from './../components/Tasks';
var moment = require('moment');

export default ({view,
    tasks,
    times,
    dayName,
    isToday,
    config, 
    dispatch
} ) => {

    var selectSlotAction = (time) => {
        config.openSpaceClickedAction
            ? dispatch(config.openSpaceClickedAction(time.day, time.time)) : null;
    };
    var thisView = view === 'week' ? 'week__' : '';
    var olClass = thisView + "day__items";
    olClass = isToday ? olClass + ' ' + thisView + 'day__isToday' : olClass;
    var getTasksForTime = (tasks, time) => tasks.filter(x => x.startTime.format('H:mm A') === time);
    return (
        <ol className={olClass}>
            <li className={thisView + "day__items__name"}>
                <WeekDayName name={dayName} view={thisView}/>
            </li>
            {times.map(timeObj => (
                <li className={timeObj.classes}
                    key={timeObj.time}
                    onClick={(e) => !e.target.className.startsWith('task') ? selectSlotAction(timeObj) : null }>
                    <div>
                        <Tasks tasks={getTasksForTime(tasks, timeObj.time)} selectTask={param => dispatch(config.taskClickedAction(param))}/>
                    </div>
                </li>))}
        </ol>);
}
