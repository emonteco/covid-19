import { takeLatest } from 'redux-saga/effects';

import {
  GET_WORLD_STATS_REQUEST,
  GET_COUNTRY_STATS_REQUEST,
} from './stats/types';
import {
  GET_COUNTRIES_REQUEST,
} from './countries/types';
import {
  fetchWorldStats,
  fetchCountryStats,
} from './stats/sagas';
import {
  fetchCountries,
} from './countries/sagas';

function* appSaga() {
  yield takeLatest(GET_WORLD_STATS_REQUEST, fetchWorldStats);
  yield takeLatest(GET_COUNTRY_STATS_REQUEST, fetchCountryStats);
  yield takeLatest(GET_COUNTRIES_REQUEST, fetchCountries);
}

export default appSaga;
