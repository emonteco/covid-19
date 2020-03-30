import {
  applyMiddleware, compose, createStore,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/rootReducer';
import rootSaga from '../redux/rootSaga';

const DEBUG = (process.env.NODE_ENV === 'development');

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

if (DEBUG) {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(),
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      DEBUG && window.devToolsExtension
        ? window.devToolsExtension()
        : (f) => f,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
