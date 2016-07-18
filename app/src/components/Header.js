
import React from 'react'
import HeaderDateNav from './HeaderDateNav';

export default ({calendarView, selectToday, caption, viewChangedEvent, incrementDate, decrementDate}) => {
    var classes = ' mdl-button mdl-src-button lt-sub-btn-md mdl-src-ripple-effect';
    var dayClasses = (calendarView === 'day' ? 'active' : '') + classes;
    var weekClasses = (calendarView === 'week' ? 'active' : '') + classes;
    var monthClasses = (calendarView === 'month' ? 'active' : '') + classes;

    return (
        <header className="mdl-layout__header cal-top">
            <selection>
                <button onClick={() => viewChangedEvent("day")} className={dayClasses}>Day</button>
                <button onClick={() => viewChangedEvent("week")} className={weekClasses}>Week</button>
                <button onClick={() => viewChangedEvent("month")} className={monthClasses}>Month</button>
                <h6 onClick={() => selectToday()}>Today</h6>
                <HeaderDateNav caption={caption} viewType={calendarView} increment={incrementDate} decrement={decrementDate} />
                <div></div>
            </selection>
        </header>
    );
}