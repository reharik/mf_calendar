/**
 * Created by rharik on 5/25/16.
 */

import React from 'react'

export default ({calendarButtonState, selectToday, viewChangedEvent}) => {
    var classes = ' mdl-button mdl-js-button lt-sub-btn-md mdl-js-ripple-effect';
    var dayClasses = (calendarButtonState.dayActive ? 'active' : '') + classes;
    var weekClasses = (calendarButtonState.weekActive ? 'active' : '') + classes;
    var monthClasses = (calendarButtonState.monthActive ? 'active' : '') + classes;
    var yearClasses = (calendarButtonState.yearActive ? 'active' : '') + classes;

    return (
        <header className="mdl-layout__header cal-top">
            <div className="mdl-layout__header-row">
                <button onClick={() => viewChangedEvent("day")} className={dayClasses}>Day</button>
                <button onClick={() => viewChangedEvent("week")} className={weekClasses}>Week</button>
                <button onClick={() => viewChangedEvent("month")} className={monthClasses}>Month</button>
                <button onClick={() => viewChangedEvent("year")} className={yearClasses}>Year</button>
                <h6 onClick={() => selectToday()}>Today</h6>
                <div className="mdl-layout-spacer"></div>
            </div>
        </header>
    );
}