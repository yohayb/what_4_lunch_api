import { put, call, takeLatest } from 'redux-saga/effects';
import { 
    GET_PLACES_REQUEST, getPlacesSuccess, getPlacesFailed,
    ADD_PLACE_REQUEST, addPlaceSuccess, addPlaceFailed,
    DELETE_PLACE_REQUEST, deletePlaceSuccess, deletePlaceFailed,
} from '../actions';
import { getPlaces, addPlace, deletePlace } from '../services/api';

export function* getPlacesSaga() {
    try {
        const response = yield call(getPlaces);
        const places = yield response.json();
        yield put(getPlacesSuccess(places));
    } catch (error) {
        yield put(getPlacesFailed(error));
    }
}

export function* addPlaceSaga(action) {
    try {
        const response = yield call(addPlace, action.place);
        const newPlace = yield response.json();
        yield put(addPlaceSuccess(newPlace.place));
    } catch (error) {
        yield put(addPlaceFailed(error));
    }
}

export function* deletePlaceSaga(action) {
    try {
        const response = yield call(deletePlace, action.name);
        const deletedPlace = yield response.json();
        yield put(deletePlaceSuccess(deletedPlace.place));
    } catch (error) {
        yield put(deletePlaceFailed(error));
    }
}

export function placesSaga() {
    return [
        takeLatest(GET_PLACES_REQUEST, getPlacesSaga),
        takeLatest(DELETE_PLACE_REQUEST, deletePlaceSaga),
        takeLatest(ADD_PLACE_REQUEST, addPlaceSaga),
    ];
}
