import React from 'react';
import { Calendar } from '../../app/src/index';
import { retrieveData,
        taskClicked,
        openSpaceCLicked } from './../actions/calendarActions';

export default () => ( <Calendar config={{
                                increment: 15,
                                width: '1200px',
                                retrieveDataAction: retrieveData,
                                taskClickedAction: taskClicked,
                                openSpaceClickedAction: openSpaceCLicked
                                }} /> );

