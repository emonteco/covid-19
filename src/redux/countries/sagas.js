import {
  call, put,
} from 'redux-saga/effects';

import * as Api from '../../services/api';
import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure,
} from './actions';

export function* fetchCountries() {
  try {
    yield put(getCountriesRequest);
    const data = yield call(Api.getCountries);
    yield put(getCountriesSuccess(data && data.countries));
  } catch (error) {
    yield put(getCountriesFailure(error));
  }
}
