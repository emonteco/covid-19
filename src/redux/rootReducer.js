import {
  combineReducers,
} from 'redux';

import countriesReducer from './countries/reducer';
import statsReducer from './stats/reducer';
import themeReducer from './theme/reducer';

export default () => combineReducers({
  countries: countriesReducer,
  stats: statsReducer,
  theme: themeReducer,
});
