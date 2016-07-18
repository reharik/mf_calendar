
import React from 'react'

export default ({week}) => (
    <content>
        <ol className="week__days">
            {week.map(day =>
                <li className="week__day">
                    <WeekDayContainer date={day} />
                </li>
            )}
        </ol>
    </content>)
