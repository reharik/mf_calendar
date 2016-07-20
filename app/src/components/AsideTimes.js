
import React from 'react'

export default ({times}) => (
        <ol className="times__column">
            <li className="times__column__spacer__item">
                <div >&nbsp;</div>
            </li>
            {times.map(timeObj => (<li className={timeObj.classes} key={timeObj.time}>
                        <div >{timeObj.display}</div>
                    </li>)
            )}
        </ol>)
