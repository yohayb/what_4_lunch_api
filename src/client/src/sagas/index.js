import { all } from 'redux-saga/effects';
import { placesSaga } from "./placesSagas";

export default function* rootSaga() {
    yield all([
        ...placesSaga(),
    ]);
}
