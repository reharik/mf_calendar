// calendar.SUNDAY     = 0
// calendar.MONDAY     = 1
// calendar.TUESDAY    = 2
// calendar.WEDNESDAY  = 3
// calendar.THURSDAY   = 4
// calendar.FRIDAY     = 5
// calendar.SATURDAY   = 6
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
  dayDisplayFormat: 'dddd',
  taskFilter: (x) => (true),
  taskMap: (x) => (x),
  canUpdate: (x) => (true),
  specificTZ: undefined,
  openSpaceClickedEvent: (x) => {console.log(x)},
  taskClickedEvent: (x) => {console.log(x)},
  retrieveData: (x) => {console.log(x)},
  updateTaskViaDND: (x) => {console.log(x)},
};

export default defaultValues;

