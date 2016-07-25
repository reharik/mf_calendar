
import React from 'react'
import HeaderDateNav from './HeaderDateNav';

export default ({calendarView,
    selectedDay, 
    caption, 
    config, 
    selectToday, 
    viewChangedEvent, 
    incrementDate, 
    decrementDate, 
    dispatch}) => {

    var viewChangedEventAction = (view) => {
        dispatch(viewChangedEvent(view));
        config.retrieveDataAction
            ? dispatch(config.retrieveDataAction(view, selectedDay)) : null;
    };
    var classes = ' header__view__nav_button ';
    var dayClasses = (calendarView === 'day' ? 'active' : '') + classes;
    var weekClasses = (calendarView === 'week' ? 'active' : '') + classes;
    var monthClasses = (calendarView === 'month' ? 'active' : '') + classes;
    return (
        <header className="header">
            <HeaderDateNav viewType={calendarView} 
                           increment={incrementDate} 
                           decrement={decrementDate} 
                           selectToday={selectToday} 
                           dispatch={dispatch} 
                           selectedDay={selectedDay}
                           config={config}/>
            <div className="header__display__date">{caption}</div>
            <selection className="header__view__nav" >
                <button onClick={() => viewChangedEventAction("day")} className={dayClasses}>Day</button>
                <button onClick={() => viewChangedEventAction("week")} className={weekClasses}>Week</button>
                <button onClick={() => viewChangedEventAction("month")} className={monthClasses}>Month</button>
            </selection>
        </header>
    );
}