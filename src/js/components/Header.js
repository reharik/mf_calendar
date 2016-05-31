/**
 * Created by rharik on 5/25/16.
 */

import React from 'react'
import DisplayHeader from './DisplayHeader';

export default ({calendarView, selectToday, caption, viewChangedEvent, incrementDate, decrementDate}) => {
    var classes = ' mdl-button mdl-js-button lt-sub-btn-md mdl-js-ripple-effect';
    var dayClasses = (calendarView === 'day' ? 'active' : '') + classes;
    var weekClasses = (calendarView === 'week' ? 'active' : '') + classes;
    var monthClasses = (calendarView === 'month' ? 'active' : '') + classes;
    var yearClasses = (calendarView === 'year' ? 'active' : '') + classes;

    return (
        <header className="mdl-layout__header cal-top">
            <div className="mdl-layout__header-row">
                <button onClick={() => viewChangedEvent("day")} className={dayClasses}>Day</button>
                <button onClick={() => viewChangedEvent("week")} className={weekClasses}>Week</button>
                <button onClick={() => viewChangedEvent("month")} className={monthClasses}>Month</button>
                <button onClick={() => viewChangedEvent("year")} className={yearClasses}>Year</button>
                <h6 onClick={() => selectToday()}>Today</h6>
                <DisplayHeader caption={caption} viewType={calendarView} increment={incrementDate} decrement={decrementDate} />
                <div className="mdl-layout-spacer"></div>
            </div>
        </header>
    );
}