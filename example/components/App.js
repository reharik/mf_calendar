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

    "tasks":[{"id":"f9a6dedb-e4ca-4489-91ee-61dbf3f6a792","date":"2017-06-16T19:14:07.666Z","notes":"hi mom","clients":["5adee657-28b7-42ba-bff1-ada46362023d"],"endTime":"2017-06-16T11:30:00.000Z","eventName":"appointmentScheduled","startTime":"2017-06-16T11:00:00.000Z","trainerId":"3aa0ffcf-07b8-44c7-bc90-8d3ed39f8605","entityName":"20170616","appointmentType":"halfHour"},{"id":"42d24b4a-5c67-44f5-bd00-08823283df0a","date":"2017-06-16T19:14:07.666Z","notes":"hi mom","clients":["bc15ad2a-c95f-459f-8788-ad0754277eb7"],"endTime":"2017-06-16T12:30:00.000Z","eventName":"appointmentScheduled","startTime":"2017-06-16T12:00:00.000Z","trainerId":"3aa0ffcf-07b8-44c7-bc90-8d3ed39f8605","entityName":"20170616","appointmentType":"halfHour"},{"id":"b6b54dd8-4a16-4bc7-8d53-d1399af63e94","date":"2017-06-16T19:14:07.666Z","notes":"hi mom","clients":["b7937174-ac1b-4c7b-9698-f88b77fbec43"],"endTime":"2017-06-16T13:30:00.000Z","eventName":"appointmentScheduled","startTime":"2017-06-16T13:00:00.000Z","trainerId":"3aa0ffcf-07b8-44c7-bc90-8d3ed39f8605","entityName":"20170616","appointmentType":"halfHour"}]}
    ;
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
