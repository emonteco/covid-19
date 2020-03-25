import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import countriesReducer from '../redux/countries/reducer';
import statsReducer from '../redux/stats/reducer';

const DEBUG = (process.env.NODE_ENV === 'development');

const createRootReducer = () => combineReducers({
  countries: countriesReducer,
  stats: statsReducer,
});

const middlewares = [thunk];

if (DEBUG) {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

export default function configureStore(preloadedState) {
  return createStore(
    createRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      DEBUG && window.devToolsExtension
        ? window.devToolsExtension()
        : (f) => f,
    ),
  );
}
