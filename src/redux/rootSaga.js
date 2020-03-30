import { all } from 'redux-saga/effects';

import countriesSaga from './countries/sagas';
import statsSaga from './stats/sagas';

export default function* rootSaga() {
  yield all([
    countriesSaga(),
    statsSaga(),
  ]);
}
