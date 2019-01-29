import { put, call, takeLatest } from 'redux-saga/effects';
import { getPlacesSuccess, getPlacesFailed } from '../actions';

function url() {
    return '/api/places';
}

export function* getPlacesWatcherSaga() {
    yield takeLatest(types.GET_PLACES_REQUEST, getPlacesSaga);
}

export function* addPlaceWatcherSaga() {
    yield takeLatest(types.ADD_PLACE_REQUEST, addPlaceSaga);
}

export function* deletePlaceWatcherSaga() {
    yield takeLatest(types.DELETE_PLACE_REQUEST, deletePlaceSaga);
}
export function* getPlacesSaga() {
    try {
        const response = yield call(getPlaces);
        const places = yield response.json();
        yield put(getPlacesSuccess(places));
    } catch (error) {
        yield put({ type: types.GET_PLACES_FAILURE, error });
    }
}

export function* addPlaceSaga(action) {
    try {
        const response = yield call(addPlace, action.place);
        const newPlace = yield response.json();

        yield put({ type: types.ADD_PLACE_SUCCESS, place: newPlace.place });
    } catch (error) {
        yield put({ type: types.ADD_PLACE_FAILURE, error });
    }
}

export function* deletePlaceSaga(action) {
    try {
        const response = yield call(deletePlace, action.name);
        const deletedPlace = yield response.json();

        yield put({ type: types.DELETE_PLACE_SUCCESS, place: deletedPlace.place });
    } catch (error) {
        yield put({ type: types.DELETE_PLACE_FAILURE, error });
    }
}

const getPlaces = () => {
    return fetch(url())
}

const addPlace = (place) => {
    const newPlace = {
        name: place.name,
        imageUrl: place.imageUrl,
        addresses: [{
            address: place.street,
            city: place.city,
            state: place.state,
            zipCode: place.zipCode
        }]
    };
    return fetch('/api/places', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlace)
    })
}

const deletePlace = (name) => {
    return fetch(`/api/places/${name}`, {
        method: "DELETE",
    });
}


