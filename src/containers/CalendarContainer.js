import React from "react";
import Calendar from "../components/Calendar";
import defaultValues from "../utils/configValues";
import CalendarContext from "../utils/calendarContext";
import "../css/index.css";
import {setup} from './../utils/rMoment';

const CalendarContainer = ({config, tasks}) => {
    const _config = {
      ...defaultValues,
      ...config,
    };
    if(config.specificTZ) {
      setup(config.specificTZ);
    }
    return (<CalendarContext.Provider value={_config}>
      <Calendar
        width={_config.width}
        tasks={tasks}/>
    </CalendarContext.Provider>);
};

export default CalendarContainer;
