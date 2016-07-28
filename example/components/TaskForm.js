import React from 'react';
import {reduxForm} from 'redux-form';
import { CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS
} from './../../app/src/index';
import uuid from 'uuid';
import moment from 'moment';

const submit = (values, dispatch,resetForm) => {
  dispatch({type: CREATE_TASK_SUCCESS,
    data: {
      task: {
        display: values.display,
        startTime: values.startTime,
        endTime: values.endTime,
        date: moment(),
        id: uuid.v4(),
        color: values.color
      }
    }});
    resetForm();
};

let TaskForm = ({fields: {startTime, endTime, display, color}, resetForm, handleSubmit, submitting}) => (
    <form onSubmit={handleSubmit((x, y) => submit(x,y,resetForm))}>
      <div>
        <label>Start Time</label>
        <input type="text" placeholder="Start Time" {...startTime}/>
      </div>
      <div>
        <label>End Time</label>
        <input type="text" placeholder="End Time" {...endTime}/>
      </div>
      <div>
        <label>Display</label>
        <input type="text" placeholder="Display" {...display}/>
      </div>
      <div>
        <label>Color</label>
        <input type="text" placeholder="Color" {...color}/>
      </div>
      <button type="submit" disabled={submitting} >Submit</button>
    </form>
   );


TaskForm = reduxForm({
  form: 'task',
  fields: ['startTime', 'endTime', 'display', 'color']
})(TaskForm);

export default TaskForm
