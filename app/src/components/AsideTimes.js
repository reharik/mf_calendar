
import React from 'react'

export default ({times}) => (
    <aside>
        <ol className="week__times__row">
            <li>
                <div className="week__day__name__item">&nbsp;</div>
            </li>
            {times.map(time =>
                <li key={time}>
                    <div className="week_times_row_item">{time}</div>
                </li>
            )}
        </ol>
    </aside>)
