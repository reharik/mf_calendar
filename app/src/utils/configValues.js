import { momentFromTime } from './../utils/calendarUtils';
import moment from 'moment';
import { NO_OP } from '../constants/constants';
const config = {
  defaultView: 'month',
  dayStartsAt: momentFromTime('7:00 AM'),
  dayEndsAt: momentFromTime('7:00 PM'),
  increment: 30,
  color: 'blue',
  titleColor: 'darkblue',
  width: '100%',
  editable: true,
  fetchDateFormat: 'YYYYMMDD',
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
  }
};

export function updateConfigs(newConfig) {
  if (newConfig.dayStartsAt && !moment.isMoment(newConfig.dayStartsAt)) {
    newConfig.dayStartsAt = momentFromTime(newConfig.dayStartsAt);
  }
  if (newConfig.dayEndsAt && !moment.isMoment(newConfig.dayEndsAt)) {
    newConfig.dayEndsAt = momentFromTime(newConfig.dayEndsAt);
  }
  return Object.assign(config, newConfig);
}

export { config };
