import React from 'react'
import Tasks from'./Tasks';

var	buildClasses = function(week, today, selectedDay, displayed, index) {
    var classes = "month__day";
    if (today.date.isSame(day, 'day')) {
        classes += ' month__day__today';
    }

    if (selectedDay.date.isSame(day, 'day')) {
        classes += ' month__day__selected';
    }
    if ((index + 1) % 7 == 0) {
        classes += ' month__day__last';
    }

    if (day.month != displayed.month) {
        classes += ' month__day__otherMonth';
    }
    return classes;
};

export default ({days, today, selectedDay, displayed, actions}) => {
    var renderDay = (day, index) => (
        <li key={index}
            className={buildClasses(day, today, selectedDay, displayed, index)}
            onClick={(e) => e.target === e.currentTarget ? actions.selectSlot(day.date.format('M/D/YYYY')):''} >
            <div className="month__day__number">{day.dayIndex}</div>
            <Tasks tasks={day.tasks} actions={actions} view="month" />
        </li>
    );
}

