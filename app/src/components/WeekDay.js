import React from 'react'
import  WeekDayName from './../components/WeekDayName';
import  Tasks from './../components/Tasks';
var moment = require('moment');


export default ({view, tasks, times, dayName, selectSlot, selectTask}) => {
    var thisView = view === 'week' ? 'week__' : '';
    var getTasksForTime = (tasks, time) => tasks.filter(x => x.startTime.format('H:mm A') === time);
   console.log('==========thisView=========');
   console.log(view);
   console.log('==========END thisView=========');
    return (
        <ol className={thisView + "day__items"}>
            <li className={thisView + "day__items__name"}>
                <WeekDayName name={dayName} view={thisView} />
            </li>
            {times.map(timeObj => (<li className={timeObj.classes} key={timeObj.time}>
                <div onClick={selectSlot}>
                    <Tasks tasks={getTasksForTime(tasks, timeObj.time)} selectTask={selectTask} />
                </div>
            </li>))}
        </ol>);
}
