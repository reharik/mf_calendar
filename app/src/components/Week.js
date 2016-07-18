import React from 'react'
import AsideTimesContainer from './../containers/AsideTimesContainer';
import WeekDaysContainer from './../containers/WeekDaysContainer';

export default ({times, dayName}) => (
    <div>
        <AsideTimesContainer />
        <WeekDaysContainer />
    </div>
)