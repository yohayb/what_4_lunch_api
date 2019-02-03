import { all } from 'redux-saga/effects';
import { placesSaga } from './placesSagas';
import { decisionsSaga } from './decisionsSaga';

export default function* rootSaga() {
    yield all([
        ...placesSaga(),
        ...decisionsSaga()
    ]);
}
