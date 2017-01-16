import * as ActionTypes from '@actions/types';

const initialState = {
  newTodoText: '',
  showCompleted: false
};

export default function todoListScreenReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
