import React from 'react';
import { Calendar } from '../../app/src/index';
import {
        taskClicked,
        openSpaceCLicked } from './../actions/calendarActions';
import { RETRIEVE_DATA,
    RETRIEVE_DATA_REQUEST,
    RETRIEVE_DATA_FAILURE,
    RETRIEVE_DATA_SUCCESS
} from './../../app/src/index'

export default ({dispatch}) => {

    const retrieveData = (startTime, endTime) => {
        window.setTimeout(function(){dispatch({type:RETRIEVE_DATA_SUCCESS, data:{tasks:[]}})}, 3000);
        return  {
            type: RETRIEVE_DATA_REQUEST
        }
    };

    return ( <Calendar config={{
                                increment: 15,
                                width: '1200px',
                                retrieveDataAction: retrieveData,
                                taskClickedAction: taskClicked,
                                openSpaceClickedAction: openSpaceCLicked
                                }} /> );
}

