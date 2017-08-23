import React from 'react';
import { Calendar } from '../../src/index';
import { updateTaskViaDND } from './../actions/calendarActions';
import { RETRIEVE_TASKS_SUCCESS } from './../reducers/taskReducer';
import moment from 'moment';
import uuid from 'uuid';
// import TaskFormContainer from './TaskFormContainer';

export default () => {
  const seed = moment();

  const a = uuid.v4();
  const b = uuid.v4();
  const c = uuid.v4();
  const d = uuid.v4();
  const getData = function () {
    // return {
    //   tasks: [
    //     {
    //       id:a,
    //       display: 'hi mom!1',
    //       startTime: getISODateTime(seed, '8:00 AM'),
    //       endTime: getISODateTime(seed, '9:00 AM'),
    //       date: getISODateTime(seed),
    //     },
    //     {
    //       id:b,
    //       display: 'hi mom!2',
    //       startTime: getISODateTime(seed, '8:30 AM'),
    //       endTime: getISODateTime(seed, '9:30 AM'),
    //       date: getISODateTime(seed),
    //     },
    //     {
    //       id:c,
    //       display: 'hi mom!3',
    //       startTime: getISODateTime(seed, '8:30 AM'),
    //       endTime: getISODateTime(seed, '9:00 AM'),
    //       date: getISODateTime(seed),
    //     },
    //     {
    //       id:d,
    //       display: 'hi mom!4',
    //       startTime: getISODateTime(seed, '9:00 AM'),
    //       endTime: getISODateTime(seed, '10:00 AM'),
    //       date: getISODateTime(seed)
    //     }
    //   ]
    // }
    return {
      tasks: [
        {
          "date": "2017-08-21T05:00:00.000Z",
          "notes": "hi mom",
          "clients": ["878a09e0-e509-444c-a9d9-966354df6a7f"],
          "endTime": "2017-08-21T14:30:00.000Z",
          "eventName": "appointmentScheduled",
          "startTime": "2017-08-21T14:00:00.000Z",
          "trainerId": "0f4f8e38-9a25-45b9-be46-fbcb85f590d8",
          "entityName": "20170821",
          "appointmentId": "042fa11a-8d52-4bcc-b2e7-9871d192dff6",
          "appointmentType": "halfHour"
        },
        {
          "notes": "hi mom",
          "clients": ["971bc86a-ef68-4154-ac29-3b818b7b33c1"],
          "endTime": "2017-08-21T12:30:00.000Z",
          "eventName": "appointmentScheduled",
          "startTime": "2017-08-21T12:00:00.000Z",
          "trainerId": "0f4f8e38-9a25-45b9-be46-fbcb85f590d8",
          "entityName": "20170821",
          "appointmentId": "499ee2f7-865e-417c-b085-4006b24590c5",
          "appointmentType": "halfHour"
        },
        {
          "date": "2017-08-21T05:00:00.000Z",
          "notes": "hi mom",
          "clients": ["3eb0cdc3-b985-4dd7-939c-5122952b2822"],
          "endTime": "2017-08-21T13:30:00.000Z",
          "eventName": "appointmentScheduled",
          "startTime": "2017-08-21T13:00:00.000Z",
          "trainerId": "0f4f8e38-9a25-45b9-be46-fbcb85f590d8",
          "entityName": "20170821",
          "appointmentId": "3c4af000-c00c-4c13-8b85-21b125b6ba98",
          "appointmentType": "halfHour"
        }
      ]
    };
    // return {
    //   tasks: [
    //     {
    //       "date": "2017-08-21T00:00:00.000",
    //       "notes": "hi mom",
    //       "clients": ["878a09e0-e509-444c-a9d9-966354df6a7f"],
    //       "endTime": "2017-08-21T09:30:00.000",
    //       "eventName": "appointmentScheduled",
    //       "startTime": "2017-08-21T09:00:00.000",
    //       "trainerId": "0f4f8e38-9a25-45b9-be46-fbcb85f590d8",
    //       "entityName": "20170821",
    //       "appointmentId": "042fa11a-8d52-4bcc-b2e7-9871d192dff6",
    //       "appointmentType": "halfHour"
    //     },
    //     {
    //       "notes": "hi mom",
    //       "clients": ["971bc86a-ef68-4154-ac29-3b818b7b33c1"],
    //       "endTime": "2017-08-21T08:30:00.000",
    //       "eventName": "appointmentScheduled",
    //       "startTime": "2017-08-21T08:00:00.000",
    //       "trainerId": "0f4f8e38-9a25-45b9-be46-fbcb85f590d8",
    //       "entityName": "20170821",
    //       "appointmentId": "499ee2f7-865e-417c-b085-4006b24590c5",
    //       "appointmentType": "halfHour"
    //     },
    //     {
    //       "date": "2017-08-21T00:00:00.000",
    //       "notes": "hi mom",
    //       "clients": ["3eb0cdc3-b985-4dd7-939c-5122952b2822"],
    //       "endTime": "2017-08-21T07:30:00.000",
    //       "eventName": "appointmentScheduled",
    //       "startTime": "2017-08-21T07:00:00.000",
    //       "trainerId": "0f4f8e38-9a25-45b9-be46-fbcb85f590d8",
    //       "entityName": "20170821",
    //       "appointmentId": "3c4af000-c00c-4c13-8b85-21b125b6ba98",
    //       "appointmentType": "halfHour"
    //     }
    //   ]
    // };

    // return {
    //   tasks: [
    //     {
    //       display: 'hi mom!1',
    //       startTime: '8:00 AM',
    //       endTime: '9:00 AM',
    //       date: new Date(),
    //       id: a,
    //       color: 'red'
    //     },
    //     {
    //       display: 'hi mom!2',
    //       startTime: '8:30 AM',
    //       endTime: '9:30 AM',
    //       date: new Date(),
    //       id: b,
    //       color: 'red'
    //     },
    //     {
    //       display: 'hi mom!3',
    //       startTime: '8:30 AM',
    //       endTime: '9:00 AM',
    //       date: new Date(),
    //       id: c,
    //       color: 'red'
    //     },
    //     {
    //       display: 'hi mom!4',
    //       startTime: '9:00 AM',
    //       endTime: '10:00 AM',
    //       date: new Date(),
    //       id: d,
    //       color: 'red'
    //     }
    //   ]
    // };
  };

  const retrieveData = (startDate, endDate) => {
    const data = getData();
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
      firstDayOfWeek: 0,
      // hideViewMenu: true,
      // hideDateNav: true,
      retrieveDataAction: retrieveData,
      updateTaskViaDND: updateTaskViaDND,
      taskId: 'appointmentId'
    }}/>
  </div>);
};
