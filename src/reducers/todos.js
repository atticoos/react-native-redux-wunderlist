import * as ActionTypes from '@actions/types';

const initialTodos = [
  {
    id: 1,
    text: 'Hello World',
    completed: false
  },
  {
    id: 2,
    text: 'Foo Bar',
    completed: true
  }
];

export default function todosReducer(state = initialTodos, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
    case ActionTypes.REMOVE_TODO:
    case ActionTypes.TOGGLE_TODO:
    default:
      return state;
  }
}
