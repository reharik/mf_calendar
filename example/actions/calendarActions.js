import { RETRIEVE_DATA,
    TASK_CLICKED,
    OPEN_SPACE_CLICKED,
    RETRIEVE_TASKS_REQUEST,
    RETRIEVE_TASKS_FAILURE,
    RETRIEVE_TASKS_SUCCESS,
  CREATE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  REMOVE_TASK_SUCCESS
} from '../../src/index';
import { CALL_API } from 'redux-api-middleware';
import uuid from 'uuid';
import moment from 'moment';
import {reset } from 'redux-form';

const retrieveData = (startTime, endTime) => {
  return {
    type: RETRIEVE_DATA,
    startTime, endTime,
    [CALL_API]: {
      endpoint: 'url',
      method: 'GET',
      types: [
        RETRIEVE_TASKS_REQUEST,
        RETRIEVE_TASKS_FAILURE,
        RETRIEVE_TASKS_SUCCESS]
    }
  };
};

const taskClicked = (id, task, dispatch) => {
  dispatch({
    type: TASK_CLICKED,
    id,
    task
  });
};

const openSpaceCLicked = (date, time, dispatch) => {
  dispatch({
    type: OPEN_SPACE_CLICKED,
    date,
    time
  });
};


const createTaskSubmitHandler = (values, dispatch) => {
  if (values.id) {
    dispatch({
      type: UPDATE_TASK_SUCCESS,
      data: {
        task: {
          display: values.display,
          startTime: values.startTime,
          endTime: values.endTime,
          color: values.color,
          id: values.id
        }
      }
    });
  } else {
    dispatch({
      type: CREATE_TASK_SUCCESS,
      data: {
        task: {
          display: values.display,
          startTime: values.startTime,
          endTime: values.endTime,
          date: moment(),
          id: uuid.v4(),
          color: values.color
        }
      }
    });
  }
  dispatch(reset('task'));
};

const removeTaskHandler = (id, dispatch) => {
  dispatch({
    type: REMOVE_TASK_SUCCESS,
    data: {
      task: {id}
    }
  })
}

export {
    retrieveData,
    taskClicked,
    openSpaceCLicked,
  createTaskSubmitHandler,
  removeTaskHandler
};

