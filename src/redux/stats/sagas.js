import {
  call, put,
} from 'redux-saga/effects';

import * as Api from '../../services/api';
import {
  getWorldStatsRequest,
  getWorldStatsSuccess,
  getWorldStatsFailure,
  getCountryStatsRequest,
  getCountryStatsSuccess,
  getCountryStatsFailure,
} from './actions';

export function* fetchWorldStats() {
  try {
    yield put(getWorldStatsRequest);
    const data = yield call(Api.getWorldStats);
    yield put(getWorldStatsSuccess(data));
  } catch (error) {
    yield put(getWorldStatsFailure(error));
  }
}

export function* fetchCountryStats(action) {
  try {
    yield put(getCountryStatsRequest);
    const data = yield call(Api.getCountryStats, action.country);
    yield put(getCountryStatsSuccess(data));
  } catch (error) {
    yield put(getCountryStatsFailure(error));
  }
}
