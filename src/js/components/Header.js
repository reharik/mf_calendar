/**
 * Created by rharik on 5/25/16.
 */

export default ({buttonState, selectToday, viewChangedEvent}) => {
    var classes = ' mdl-button mdl-js-button lt-sub-btn-md mdl-js-ripple-effect';
    var dayClasses = (buttonState.dayActive ? 'active' : '') + classes;
    var weekClasses = (buttonState.weekActive ? 'active' : '') + classes;
    var monthClasses = (buttonState.monthActive ? 'active' : '') + classes;
    var yearClasses = (buttonState.yearActive ? 'active' : '') + classes;

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