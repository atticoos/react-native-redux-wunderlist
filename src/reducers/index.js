import {combineReducers} from 'redux';
import todos from './todos';
import todoListScreen from './todoListScreen';

export default combineReducers({
  todos,
  todoListScreen
});
