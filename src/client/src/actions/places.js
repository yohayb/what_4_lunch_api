import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
} from './actionTypes';

// Get places
export const getPlaces = () => ({ type: GET_PLACES_REQUEST });
export const getPlacesSuccess = places => ({ type: types.GET_PLACES_SUCCESS, places });
export const getPlacesFailed = error => ({ type: types.GET_PLACES_FAILURE, error });