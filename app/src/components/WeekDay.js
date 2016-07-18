import React from 'react'

export default ({times, dayName}) => (
    <content>
        <ol className="week__day__items">
            <li className="week__day__name">
                <WeekDayName name={name} />
            </li>
            {times.map(day =>
                <li className="week__day__items">
                    <WeekDayTime time={time} />
                </li>
            )}
        </ol>
    </content>)
