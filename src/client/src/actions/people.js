import {
    GET_PEOPLE_REQUEST,
    GET_PEOPLE_SUCCESS,
    GET_PEOPLE_FAILURE,
    ADD_PEOPLE_REQUEST,
    ADD_PEOPLE_SUCCESS,
    ADD_PEOPLE_FAILURE,
    DELETE_PEOPLE_REQUEST,
    DELETE_PEOPLE_SUCCESS,
    DELETE_PEOPLE_FAILURE,
} from './types';

// Get people
export const getPeople = () => ({ type: GET_PEOPLE_REQUEST });
export const getPeopleSuccess = people => ({ type: GET_PEOPLE_SUCCESS, people });
export const getPeopleFailed = error => ({ type: GET_PEOPLE_FAILURE, error });

// Add people
export const addPeople = (person) => ({ type: ADD_PEOPLE_REQUEST, person });
export const addPeopleSuccess = person => ({ type: ADD_PEOPLE_SUCCESS, person });
export const addPeopleFailed = error => ({ type: ADD_PEOPLE_FAILURE, error });

// Delete people
export const deletePeople = (name) => ({ type: DELETE_PEOPLE_REQUEST, name });
export const deletePeopleSuccess = person => ({ type: DELETE_PEOPLE_SUCCESS, person });
export const deletePeopleFailed = error => ({ type: DELETE_PEOPLE_FAILURE, error });