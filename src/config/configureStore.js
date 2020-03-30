import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import countriesReducer from '../redux/countries/reducer';
import statsReducer from '../redux/stats/reducer';
import themeReducer from '../redux/theme/reducer';
import appSaga from '../redux/sagas';

const DEBUG = (process.env.NODE_ENV === 'development');

const createRootReducer = () => combineReducers({
  countries: countriesReducer,
  stats: statsReducer,
  theme: themeReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

if (DEBUG) {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      DEBUG && window.devToolsExtension
        ? window.devToolsExtension()
        : (f) => f,
    ),
  );
  sagaMiddleware.run(appSaga);
  return store;
}
