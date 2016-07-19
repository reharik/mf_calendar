
import React from 'react'
import HeaderDateNav from './HeaderDateNav';

export default ({calendarView, selectToday, caption, viewChangedEvent, incrementDate, decrementDate}) => {
    var classes = ' mdl-button mdl-src-button lt-sub-btn-md mdl-src-ripple-effect';
    var dayClasses = (calendarView === 'day' ? 'active' : '') + classes;
    var weekClasses = (calendarView === 'week' ? 'active' : '') + classes;
    var monthClasses = (calendarView === 'month' ? 'active' : '') + classes;

    return (
        <header className="calendar__header">
            <HeaderDateNav viewType={calendarView} increment={incrementDate} decrement={decrementDate} selectToday={selectToday} />
            <h2>{caption}</h2>
            <selection className="calendar__header__view__nav" >
                <button onClick={() => viewChangedEvent("day")} className={dayClasses}>Day</button>
                <button onClick={() => viewChangedEvent("week")} className={weekClasses}>Week</button>
                <button onClick={() => viewChangedEvent("month")} className={monthClasses}>Month</button>
            </selection>
        </header>
    );
}