import * as ActionTypes from './types';

export function openDrawer () {
  return {
    type: ActionTypes.OPEN_DRAWER
  };
}

export function closeDrawer() {
  return {
    type: ActionTypes.CLOSE_DRAWER
  };
}

export function drawerOpened() {
  return {
    type: ActionTypes.DRAWER_OPENED
  };
}

export function drawerClosed() {
  return {
    type: ActionTypes.DRAWER_CLOSED
  };
}
