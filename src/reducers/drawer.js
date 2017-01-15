import * as ActionTypes from '../actions/types';

export default function drawerReducer(open = false, action) {
  switch (action.type) {
    case ActionTypes.DRAWER_OPENED:
    case ActionTypes.OPEN_DRAWER:
      return true;
    case ActionTypes.CLOSE_DRAWER:
    case ActionTypes.DRAWER_CLOSED:
      return false;
    default:
      return open;
  }
}
