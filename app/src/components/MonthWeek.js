import React from 'react'
import MonthTasks from'./MonthTasks';

export default ({weekDays, config, dispatch}) => {
    var selectSlotAction = (time) => {
        config.openSpaceClickedAction
            ? dispatch(config.openSpaceClickedAction(time.day, time.time)) : null;
    };
    return (
        <ol className="month__week" >
            { weekDays.map((day, idx) =>
                <li key={idx}
                    className={day.classes}
                    onClick={(e) => e.target === e.currentTarget ? selectSlotAction(day):''}>
                    <div className="month__day__number">{day.date()}</div>
                    <MonthTasks tasks={day.tasks} config={config} dispatch={dispatch} />
                </li>)
            }
        </ol>
    )
}
