import { all } from 'redux-saga/effects';
import { placesSaga } from './placesSaga';
import { decisionsSaga } from './decisionsSaga';
import { peopleSaga } from './peopleSaga';


export default function* rootSaga() {
    yield all([
        ...placesSaga(),
        ...decisionsSaga(),
        ...peopleSaga()
    ]);
}
