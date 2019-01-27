import initialState from './initialState';
import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
    ADD_PLACE_REQUEST,
    ADD_PLACE_SUCCESS,
    ADD_PLACE_FAILURE,
    DELETE_PLACE_REQUEST,
    DELETE_PLACE_SUCCESS,
    DELETE_PLACE_FAILURE
} from '../actions/actionTypes';

const placesReducer = (state = initialState, action) => {
    console.log(`reducers state: `, action);
    switch (action.type) {
        case GET_PLACES_REQUEST:
        case ADD_PLACE_REQUEST:
        case DELETE_PLACE_REQUEST:
            return { ...state, fetching: true, error: null };
        case GET_PLACES_SUCCESS:
            return { ...state, fetching: false, places: action.places };
        case ADD_PLACE_SUCCESS:
            const newPlaces = [...state.places];
            newPlaces.push(action.place);
            return { ...state, fetching: false, places: newPlaces };
        case DELETE_PLACE_SUCCESS:
            return { places: state.places.filter(p => p.name !== action.place.name), fetching: false, error: null };
        case GET_PLACES_FAILURE:
        case ADD_PLACE_FAILURE:
        case DELETE_PLACE_FAILURE:
            return { ...state, fetching: false, error: action.error };
        default:
            return state;
    }
}

export default placesReducer;