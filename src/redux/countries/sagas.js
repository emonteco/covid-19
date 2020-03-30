import {
  call, put, takeLatest,
} from 'redux-saga/effects';

import * as Api from '../../services/api';
import {
  getCountriesSuccess,
  getCountriesFailure,
} from './actions';
import {
  GET_COUNTRIES_REQUEST,
} from './types';

function* fetchCountries() {
  try {
    const data = yield call(Api.getCountries);
    yield put(getCountriesSuccess(data && data.countries));
  } catch (error) {
    yield put(getCountriesFailure(error));
  }
}

export default function* countriesSaga() {
  yield takeLatest(GET_COUNTRIES_REQUEST, fetchCountries);
}
