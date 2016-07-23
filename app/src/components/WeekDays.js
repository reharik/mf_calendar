
import React from 'react'
import DayContainer from './../containers/DayContainer';

export default ({week}) => (
        <ol className="week__days">
            {week.map(day =>
                <li className="week__day" key={day}>
                    <DayContainer date={day} />
                </li>
            )}
        </ol>)
