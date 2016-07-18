/**
 * Created by rharik on 6/6/16.
 */

import twix from 'twix';

var getTwix = function(task){
    return task.startTime.twix(task.endTime);
};

var determineWidthOfTask = function(_tasks, day){
    var tasks = _tasks.filter(task => task.date.isSame(day, 'day'));
    tasks.map(task => {
        var subject = getTwix(task);
        var overlayTasks = tasks.filter(t => getTwix(t).overlaps(subject));
        task.width = (100 / overlayTasks.length) -1;
        return task;
    });
    return tasks;
};

export {
    determineWidthOfTask
}