import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import * as Api from '../../services/api';
import {
  getWorldStatsSuccess,
  getWorldStatsFailure,
  getCountryStatsRequest,
  getCountryStatsSuccess,
  getCountryStatsFailure,
} from './actions';
import {
  GET_WORLD_STATS_REQUEST,
} from './types';
import {
  SELECT_COUNTRY,
} from '../countries/types';

function* fetchWorldStats() {
  try {
    const data = yield call(Api.getWorldStats);
    yield put(getWorldStatsSuccess(data));
  } catch (error) {
    yield put(getWorldStatsFailure(error));
  }
}

function* fetchCountryStats(action) {
  try {
    yield put(getCountryStatsRequest());
    const data = yield call(Api.getCountryStats, action.country);
    yield put(getCountryStatsSuccess(data));
  } catch (error) {
    yield put(getCountryStatsFailure(error));
  }
}

export default function* statsSaga() {
  yield takeLatest(GET_WORLD_STATS_REQUEST, fetchWorldStats);
  yield takeLatest(SELECT_COUNTRY, fetchCountryStats);
}
