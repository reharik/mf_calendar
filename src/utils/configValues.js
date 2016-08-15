import moment from 'moment';
import { NO_OP } from '../constants/constants';
import {merge} from 'lodash';

const config = {
  defaultView: 'month',
  dayStartsAt: moment('7:00 AM', ['h:mm A']),
  dayEndsAt: moment('7:00 PM', ['h:mm A']),
  increment: 30,
  color: 'blue',
  titleColor: 'darkblue',
  width: '',
  editable: true,
  fetchDateFormat: 'YYYYMMDD',
  displayTimeFormat: 'h:mm A',
  retrieveDataAction: () => {
    return {type: NO_OP};
        /*no-op*/
  },
  taskClickedAction: () => {
    return {type: NO_OP};
        /*no-op*/
  },
  openSpaceClickedAction: () => {
    return {type: NO_OP};
        /*no-op*/
  },
  updateTaskViaDND: () => {
    return {type: NO_OP};
    /*no-op*/
  }
};

export function updateConfigs(newConfig) {
  if (newConfig.dayStartsAt && !moment.isMoment(newConfig.dayStartsAt)) {
    newConfig.dayStartsAt = moment(newConfig.dayStartsAt, newConfig.displayTimeFormat || config.displayTimeFormat);
  }
  if (newConfig.dayEndsAt && !moment.isMoment(newConfig.dayEndsAt)) {
    newConfig.dayEndsAt = moment(newConfig.dayEndsAt, newConfig.displayTimeFormat || config.displayTimeFormat);
  }
  merge(config, newConfig);
  return config;
}

export { config };
