import React from 'react'
import MonthTasks from'./MonthTasks';

export default ({weekDays, selectSlot, selectTask}) => (
        <ol className="month__week" >
            { weekDays.map((day, idx) =>
                <li key={idx}
                    className={day.classes}
                    onClick={(e) => e.target === e.currentTarget ? selectSlot(day.date.format('M/D/YYYY')):''}>
                    <div className="month__day__number">{day.dayIndex}</div>
                    <MonthTasks tasks={day.tasks} selectTask={selectTask} />
                </li>)
            }
        </ol>
    )
