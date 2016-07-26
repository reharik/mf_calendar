import { RETRIEVE_DATA,
    TASK_CLICKED,
    OPEN_SPACE_CLICKED,
    RETRIEVE_DATA_REQUEST,
    RETRIEVE_DATA_FAILURE,
    RETRIEVE_DATA_SUCCESS
} from './../../app/src/index'
import { CALL_API } from 'redux-api-middleware';

const retrieveData = (startTime, endTime) => {
    return {
        type:RETRIEVE_DATA,
        startTime, endTime,
        [CALL_API]: {
            endpoint: 'url',
            method: 'GET',
            types: [
                RETRIEVE_DATA_REQUEST,
                RETRIEVE_DATA_FAILURE,
                RETRIEVE_DATA_SUCCESS]
        }
    };
};

const taskClicked = (params) => {
    return {
        type: TASK_CLICKED,
        params
    }
};

const openSpaceCLicked = (params) => {
    return {
        type: OPEN_SPACE_CLICKED,
        params
    }
};

export  {
    retrieveData,
    taskClicked,
    openSpaceCLicked
}

