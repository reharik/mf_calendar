import { VIEW_CHANGED_EVENT } from './../constants/actionConstants';

export default (state = {view: 'month'}, action = null) => {
  if (action.type === VIEW_CHANGED_EVENT) {
    return {view: action.view};
  }
  return state;
};

