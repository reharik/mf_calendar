import React from 'react';
import { Calendar } from '../../src/index';
import { updateTaskViaDND } from './../actions/calendarActions';
import { RETRIEVE_TASKS_SUCCESS } from './../reducers/taskReducer';
import moment from 'moment';
import uuid from 'uuid';
// import TaskFormContainer from './TaskFormContainer';

export default () => {
  const seed = moment();
  const getISODateTime = (date, time = '12:01 AM') => {
    moment.locale('en');
    let hour = parseInt(time.substring(0, time.indexOf(':')));
    let min =  parseInt(time.substring(time.indexOf(':') + 1, time.indexOf(' ')));
    let A = time.substring(time.indexOf(' ') + 1);
    hour = A === 'AM' ? hour : hour + 12;
    let result = moment(date).hour(hour).minute(min);

    return result.toISOString();
  };

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
          "date": "2017-08-20T00:00:00.000Z",
          "notes": "hi mom",
          "clients": ["432e7f8b-3c3a-461f-91ea-902de85e2882"],
          "endTime": "2017-08-20T14:30:00.000Z",
          "eventName": "appointmentScheduled",
          "startTime": "2017-08-20T14:00:00.000Z",
          "trainerId": "ce0cafe7-8698-4144-925d-b97d759096d7",
          "entityName": "20170820",
          "appointmentId": "dd3a39be-f2c2-4464-8b91-8f4af8ce76fa",
          "appointmentType": "halfHour"
        },
        {
          "date": "2017-08-20T00:00:00.000Z",
          "notes": "hi mom",
          "clients": ["5e726ca5-b1c7-4121-8e4f-440c344b47b9"],
          "endTime": "2017-08-20T12:30:00.000Z",
          "eventName": "appointmentScheduled",
          "startTime": "2017-08-20T12:00:00.000Z",
          "trainerId": "ce0cafe7-8698-4144-925d-b97d759096d7",
          "entityName": "20170820",
          "appointmentId": "67b2ecd9-13e7-4839-91f1-1bbd4feb6895",
          "appointmentType": "halfHour"
        },
        {
          "date": "2017-08-20T00:00:00.000Z",
          "notes": "hi mom",
          "clients": ["700a2b4d-65e5-4fed-9906-8cf1a6c60039"],
          "endTime": "2017-08-20T13:30:00.000Z",
          "eventName": "appointmentScheduled",
          "startTime": "2017-08-20T13:00:00.000Z",
          "trainerId": "ce0cafe7-8698-4144-925d-b97d759096d7",
          "entityName": "20170820",
          "appointmentId": "78cec260-8179-4c0d-90cf-daf8865524a2",
          "appointmentType": "halfHour"
        }
      ]
    };
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
