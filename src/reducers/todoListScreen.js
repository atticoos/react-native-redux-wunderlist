import * as ActionTypes from '@actions/types';

const initialState = {
  newTodoText: '',
  showCompleted: false
};

export default function todoListScreenReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TODO_TEXT_CHANGED:
    case ActionTypes.TOGGLE_SHOW_COMPLETED:
    default:
      return state;
  }
}
