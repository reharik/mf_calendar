import Task from '../components/Task';
import { DragSource } from 'react-dnd';
import { momentFromTime } from './../utils/calendarUtils';
import moment from 'moment';

const taskSource = {
  beginDrag(props) {
    return {
      task: props.task
    };
  },
  endDrag(props, monitor) {
    const originalTask = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      const task = { ...originalTask.task,
        startTime: dropResult.startTime,
        endTime: momentFromTime(dropResult.startTime, props.displayTimeFormat)
          .add(originalTask.task.slots * props.increment, 'minutes').format(props.displayTimeFormat),
        date: moment(dropResult.date).format(props.fetchDateFormat) };
      props.updateTaskViaDND(task);
    }
  },
  canDrag(props) {
    return  !props.canUpdate || props.canUpdate(props.task);
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

export default DragSource('calendar/task/TASK_DRAG_SOURCE', taskSource, collect)(Task); // eslint-disable-line new-cap
