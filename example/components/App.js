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
    let result = moment(date).hour(hour).minute(min).utc();

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
          display: 'hi mom!1',
          startTime: '8:00 AM',
          endTime: '9:00 AM',
          date: new Date(),
          id: a,
          color: 'red'
        },
        {
          display: 'hi mom!2',
          startTime: '8:30 AM',
          endTime: '9:30 AM',
          date: new Date(),
          id: b,
          color: 'red'
        },
        {
          display: 'hi mom!3',
          startTime: '8:30 AM',
          endTime: '9:00 AM',
          date: new Date(),
          id: c,
          color: 'red'
        },
        {
          display: 'hi mom!4',
          startTime: '9:00 AM',
          endTime: '10:00 AM',
          date: new Date(),
          id: d,
          color: 'red'
        }
      ]
    };
  };

  const retrieveData = (startDate, endDate) => {
    const data = getData();
    return {type: RETRIEVE_TASKS_SUCCESS, data};
  };

  return (<div className="app">
    {/*<TaskFormContainer />*/}
    <Calendar config={{
      utcTime: true,
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
