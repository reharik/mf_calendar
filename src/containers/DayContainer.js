import Day from "../components/Day";
import { process } from "../utils/widthAndColumn";
import { augmentTimes, normalizeTasks } from "../utils/calendarUtils";
import CalendarContext from "../utils/calendarContext";
import React, {useContext} from "react";
import {rMoment} from './../utils/rMoment';

const DayContainer = ({tasks, date, view}) => {
  const config = useContext(CalendarContext);

  let day = date != null ? rMoment(date) : rMoment();
  let filterToday = x => rMoment(x.date || x.startTime).isSame(day, "day");
  let thisView =
    view === "week" ? "redux__task__calendar__week__" : "redux__task__calendar__";
  let classes = thisView + "day__items__slot ";
  let unprocessedTasks = (tasks || [])
    .filter(filterToday)
    .filter(a => config.taskFilter(a))
    .map(a => config.taskMap(a));
  let processedTasks = process(normalizeTasks(unprocessedTasks, config));
  return (<Day
    view={view}
    tasks={processedTasks}
    times ={augmentTimes(classes, day, config)}
    dayName={day.format(config.dayDisplayFormat)}
    isToday={day.isSame(rMoment(), "day")}
    />
  );
};

export default DayContainer;
