import {combineReducers} from 'redux';
import drawer from './drawer';
import todoLists from './todoLists';

export default combineReducers({
  drawer,
  todoLists
});
