import React from 'react';
import { Calendar } from '../../src/index';
import { taskClicked, openSpaceCLicked } from './../actions/calendarActions';
import { RETRIEVE_TASKS_REQUEST, RETRIEVE_TASKS_SUCCESS } from '../../src/index';
import uuid from 'uuid';
import moment from 'moment';
import {reduxForm} from 'redux-form';
import TaskFormContainer from './TaskFormContainer';

export default () => {

  const a = uuid.v4();
  const b = uuid.v4();
  const c = uuid.v4();
  const d = uuid.v4();
  const getData = function() {
    return {
      tasks: [
        {
          display: 'fuck you!1',
          startTime: '8:00 AM',
          endTime: '9:00 AM',
          date: new Date(),
          id: a,
          color: 'red'
        },
        {
          display: 'fuck you!2',
          startTime: '8:30 AM',
          endTime: '9:30 AM',
          date: new Date(),
          id: b,
          color: 'red'
        },
        {
          display: 'fuck you!3',
          startTime: '8:30 AM',
          endTime: '9:00 AM',
          date: new Date(),
          id: c,
          color: 'red'
        },
        {
          display: 'fuck you!4',
          startTime: '9:00 AM',
          endTime: '10:00 AM',
          date: new Date(),
          id: d,
          color: 'red'
        }
      ]
    };
  };

  const retrieveData = (startDate, endDate, dispatch) => {
    var data = getData();
    window.setTimeout(function() {
      dispatch({type: RETRIEVE_TASKS_SUCCESS, data});
    }, 100);
    dispatch({
      type: RETRIEVE_TASKS_REQUEST
    });
  };

  return (<div className="app" >
    <TaskFormContainer />
    <Calendar config={{
      increment: 15,
      width: '1200px',
      retrieveDataAction: retrieveData,
      taskClickedAction: taskClicked,
      openSpaceClickedAction: openSpaceCLicked
    }} />
  </div>);
};
