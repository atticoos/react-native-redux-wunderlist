import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger({
  collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
