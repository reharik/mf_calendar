// calendar.MONDAY     = 0
// calendar.TUESDAY    = 1
// calendar.WEDNESDAY  = 2
// calendar.THURSDAY   = 3
// calendar.FRIDAY     = 4
// calendar.SATURDAY   = 5
// calendar.SUNDAY     = 6
const defaultValues = {
  defaultView: 'month',
  firstDayOfWeek: 0,
  dayStartsAt: '7:00 AM',
  dayEndsAt: '7:00 PM',
  increment: 30,
  color: 'blue',
  titleColor: 'darkblue',
  width: '',
  editable: true,
  fetchDateFormat: 'YYYYMMDD',
  displayTimeFormat: 'LT',
  hideViewMenu: false,
  hideDateNav: false,
  taskId: 'id',
  taskFilter: (x) => (true),
  taskMap: (x) => (x)
};

export default defaultValues;

