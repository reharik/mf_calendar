export const VIEW_CHANGED_EVENT = 'VIEW_CHANGED_EVENT';

export default (state = 'month', action = null) => {
  if (action.type === VIEW_CHANGED_EVENT) {
    return action.view;
  }
  return state;
};

export function viewChangedEvent(view) {
  return {
    type: VIEW_CHANGED_EVENT,
    view
  };
}
