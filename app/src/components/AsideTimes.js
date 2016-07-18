
import React from 'react'

export default ({times}) => (
    <aside>
        <ol className="week__times__row">
            <li>
                <div className="week__day__name__item"><span>{dayName}</span></div>
            </li>
            {times.map(time =>
                <li>
                    <div className="week_times_row_item"><span>{time}</span></div>
                </li>
            )}
        </ol>
    </aside>)
