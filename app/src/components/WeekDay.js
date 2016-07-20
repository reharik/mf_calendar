import React from 'react'
import  WeekDayName from './../components/WeekDayName';
import  WeekDayTime from './../components/WeekDayTime';


export default ({times, dayName}) => (
        <ol className="week__day__items">
            <li className="week__day__items__name">
                <WeekDayName name={dayName} />
            </li>
            {times.map(time =>
                <li className="week__day__items__slot" key={time}>
                    <WeekDayTime time={time} />
                </li>
            )}
        </ol>)
