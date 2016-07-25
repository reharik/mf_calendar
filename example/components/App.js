import React from 'react';
import Calendar from '../../app/src/containers/CalendarContainer'
import { retrieveData,
        taskClicked,
        openSpaceCLicked } from './../actions/calendarActions'

export default () => ( <Calendar config={{
                                increment: 15,
                                retrieveDataAction: retrieveData,
                                taskClickedAction: taskClicked,
                                openSpaceClickedAction: openSpaceCLicked
                                }} /> );

