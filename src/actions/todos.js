import * as ActionTypes from '@actions/types';

function* createIdGenerator () {
  var id = 2;
  while (true) {
    yield ++id;
  }
}
const idGenerator = createIdGenerator();

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    id: idGenerator.next().value,
    text
  }
}

export function removeTodo(id) {
  return {
    type: ActionTypes.REMOVE_TODO,
    id
  };
}

export function toggleCompleted(id) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  }
}
