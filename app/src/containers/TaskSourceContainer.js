import Task from './../components/Task';
import { DragSource } from 'react-dnd';
import { TASK_DRAG_SOURCE, UPDATE_TASK_SUCCESS } from './../modules/tasks';
import { momentFromTime } from './../utils/calendarUtils';

const taskSource = {
  beginDrag(props) {
    return {
      task: props.task
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      props.dispatch({
        type: UPDATE_TASK_SUCCESS,
        data: {
          task: {...item.task,
            startTime: dropResult.time,
            endTime: momentFromTime(dropResult.time).add(1, 'hour').format('h:mm A'),
            date: dropResult.day}
        }
      });
    }
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

export default DragSource(TASK_DRAG_SOURCE, taskSource, collect)(Task); // eslint-disable-line new-cap
