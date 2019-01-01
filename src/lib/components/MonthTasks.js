import React, {useContext} from "react";
import PropTypes from 'prop-types';
import CalendarContext from "../utils/calendarContext";

const MonthTasks = ({tasks}) => {
  const config = useContext(CalendarContext);

//possibly pull task out into it's own component so I can avoid defining an anonymous function in render ( onclick )
  return (<div className="redux__task__calendar__month__task">
    {tasks.map((t, index) => {
      return (<div className="redux__task__calendar__month__task__item" key={index}
                   style={{backgroundColor: t.color}}
                   onClick={() => config.taskClickedEvent(t.id, t)}>
        <div className="redux__task__calendar__month__task__item__title"
             style={{backgroundColor: t.titleColor}}>{t.title}</div>
      </div>);
    })}
  </div>);
};

MonthTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  calendarName: PropTypes.string.isRequired,
  taskClickedAction: PropTypes.func.isRequired
};

export default MonthTasks;
