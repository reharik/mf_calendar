
import React from 'react'

export default ({times}) => (
        <ol className="week__times__column">
            <li className="week__times__column__item">
                <div >&nbsp;</div>
            </li>
            {times.map(time =>
                <li className="week__times__column__item" key={time}>
                    <div >{time}</div>
                </li>
            )}
        </ol>)
