import * as ActionTypes from '../actions/types';

const initialState = {};

export default function todoListsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_TODO_LIST:
      return {
        ...state,
        [action.id]: {
          name: action.name
        }
      };
    case ActionTypes.DELETE_TODO_LIST:
      let nextState = {...state};
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
}
