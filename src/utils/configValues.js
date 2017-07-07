const defaultValues = {
  defaultView: 'month',
  dayStartsAt: '7:00 AM',
  dayEndsAt: '7:00 PM',
  increment: 30,
  color: 'blue',
  titleColor: 'darkblue',
  width: '',
  editable: true,
  fetchDateFormat: 'YYYYMMDD',
  displayTimeFormat: 'LT',
  utcTime: true,
  taskFilter: (x) => (true),
  taskMap: (x) => (x)
};

export default defaultValues
