import { put, takeEvery } from 'redux-saga/effects';
import * as types from './actionTypes';

function url() {
    return '/api/places';
}


export function* fetchPlaces() {
    yield fetch(url())
        .then(response => response.json())
        .then(json => json);
    yield put({ type: types.RECEIVE_PLACES });
}
export function* receivePlaces(json) {
    yield put({ type: types.RECEIVE_PLACES, places: json.places });
}



