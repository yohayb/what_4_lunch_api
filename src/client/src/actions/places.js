import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
    ADD_PLACE_REQUEST,
    ADD_PLACE_SUCCESS,
    ADD_PLACE_FAILURE,
    DELETE_PLACE_REQUEST,
    DELETE_PLACE_SUCCESS,
    DELETE_PLACE_FAILURE,
} from './types';

// Get places
export const getPlaces = () => ({ type: GET_PLACES_REQUEST });
export const getPlacesSuccess = places => ({ type: GET_PLACES_SUCCESS, places });
export const getPlacesFailed = error => ({ type: GET_PLACES_FAILURE, error });

// Add place
export const addPlace = (place, cb) => ({ type: ADD_PLACE_REQUEST, place, cb });
export const addPlaceSuccess = place => ({ type: ADD_PLACE_SUCCESS, place });
export const addPlaceFailed = error => ({ type: ADD_PLACE_FAILURE, error });

// Delete place
export const deletePlace = (name) => ({ type: DELETE_PLACE_REQUEST, name });
export const deletePlaceSuccess = place => ({ type: DELETE_PLACE_SUCCESS, place });
export const deletePlaceFailed = error => ({ type: DELETE_PLACE_FAILURE, error });
