import * as ActionTypes from '@actions/types';

export function newTodoTextChanged(text) {
  return {
    type: ActionTypes.TODO_TEXT_CHANGED,
    text
  }
}

export function toggleCompletedVisibililty() {
  return {
    type: ActionTypes.TOGGLE_SHOW_COMPLETED
  };
}
