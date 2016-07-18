
import React from 'react'
import WeekDayContainer from './../containers/WeekDayContainer';

export default ({week}) => (
    <content>
        <ol className="week__days">
            {week.map(day =>
                <li className="week__day" key={day}>
                    <WeekDayContainer date={day} />
                </li>
            )}
        </ol>
    </content>)
