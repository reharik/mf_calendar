export const VIEW_CHANGED_EVENT = 'calendar/view/VIEW_CHANGED_EVENT';

export default (state = 'month', action = null) => {
  const thisState = state[action.config.calendarName];

  if (action.type === VIEW_CHANGED_EVENT) {
    return {...thisState, view:action.view};
  }
  return state;
};

export function viewChangedEvent(view) {
  return {
    type: VIEW_CHANGED_EVENT,
    view
  };
}
