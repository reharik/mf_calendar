import moment from 'moment';
import Calendar from 'node-calendar';

const defaultValues = {
  defaultView: 'month',
  firstDayOfWeek: Calendar.SUNDAY,
  dayStartsAt: moment('7:00 AM', ['h:mm A']),
  dayEndsAt: moment('7:00 PM', ['h:mm A']),
  increment: 30,
  color: 'blue',
  titleColor: 'darkblue',
  width: '',
  editable: true,
  fetchDateFormat: 'YYYYMMDD',
  displayTimeFormat: 'h:mm A',
  taskFilter: (x) => (true),
  taskMap: (x) => (x)
};

export default defaultValues
