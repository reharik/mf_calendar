import React from 'react';
import { Calendar } from '../../src/index';
import { updateTaskViaDND } from './../actions/calendarActions';
import { RETRIEVE_TASKS_SUCCESS } from './../reducers/taskReducer';
import uuid from 'uuid';
// import TaskFormContainer from './TaskFormContainer';

export default () => {

  const a = uuid.v4();
  const b = uuid.v4();
  const c = uuid.v4();
  const d = uuid.v4();
  const getData = function () {
    return {
      tasks: [
        {
          appointmentType: "halfHour",
          clients: Array[1],
          date: "2017-06-17T13:06:28.688Z",
          endTime: "2017-06-17T12:30:00.000Z",
          entityName: "20170617",
          eventName: "appointmentScheduled",
          id: "4d36c026-8255-4076-b94f-a0ccd3a1fa08",
          notes: "hi mom",
          startTime: "2017-06-17T12:00:00.000Z",
          trainerId: "378ba3b2-5653-4b85-a1f2-c4fe3c986a30"
        },
        {
          appointmentType: "halfHour",
          clients: Array[1],
          date: "2017-06-17T13:06:28.688Z",
          endTime: "2017-06-17T13:30:00.000Z",
          entityName: "20170617",
          eventName: "appointmentScheduled",
          id: "5f8d92d1-55d9-4998-9650-bee7d8b3b267",
          notes: "hi mom",
          startTime: "2017-06-17T13:00:00.000Z",
          trainerId: "378ba3b2-5653-4b85-a1f2-c4fe3c986a30"
        },
        {
          appointmentType: "halfHour",
          clients: Array[1],
          date: "2017-06-17T14:00:00.000Z",
          endTime: "2017-06-17T14:30:00.000Z",
          entityName: "20170617",
          id: "1b83fd95-e448-47ef-b0b9-aad4cb24942b",
          notes: "hi mom",
          startTime: "2017-06-17T14:00:00.000Z",
          trainer: "378ba3b2-5653-4b85-a1f2-c4fe3c986a30"
        }
      ]
    }
  };

  const retrieveData = (startDate, endDate) => {
    var data = getData();
    return {type: RETRIEVE_TASKS_SUCCESS, data};
  };

  return (<div className="app">
    {/*<TaskFormContainer />*/}
    <Calendar config={{
      calendarName: 'testCalendar',
      increment: 15,
      width: '1200px',
      dataSource: 'tasks',
      defaultView: 'week',
      retrieveDataAction: retrieveData,
      updateTaskViaDND: updateTaskViaDND
    }}/>
  </div>);
};
