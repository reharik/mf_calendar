import {SELECT_TASK, SELECT_SLOT} from './../constants/actionConstants'

const selectSlot = (date, startTime) => {
    return {
        type: SELECT_SLOT,
        date,
        startTime
    }
};

const selectTask = (task, view) => {
    return {
        type: SELECT_TASK,
        task,
        view
    }
};

export {
    selectTask,
    selectSlot
}
