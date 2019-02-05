import { peopleState } from './initialState';
import {
    GET_PEOPLE_REQUEST,
    GET_PEOPLE_SUCCESS,
    GET_PEOPLE_FAILURE,
    ADD_PEOPLE_REQUEST,
    ADD_PEOPLE_SUCCESS,
    ADD_PEOPLE_FAILURE,
    DELETE_PEOPLE_REQUEST,
    DELETE_PEOPLE_SUCCESS,
    DELETE_PEOPLE_FAILURE
} from '../actions';

const peopleReducer = (state = peopleState, action) => {
    switch (action.type) {
        case GET_PEOPLE_REQUEST:
        case ADD_PEOPLE_REQUEST:
        case DELETE_PEOPLE_REQUEST:
            return { ...state, fetching: true, error: null };
        case GET_PEOPLE_SUCCESS:
            return { ...state, fetching: false, people: action.people };
        case ADD_PEOPLE_SUCCESS:
            const newPeople = [...state.people];
            newPeople.push(action.person);
            return { ...state, fetching: false, people: newPeople };
        case DELETE_PEOPLE_SUCCESS:
            return { people: state.people.filter(p => p.name !== action.person.name), fetching: false, error: null };
        case GET_PEOPLE_FAILURE:
        case ADD_PEOPLE_FAILURE:
        case DELETE_PEOPLE_FAILURE:
            return { ...state, fetching: false, error: action.error };
        default:
            return state;
    }
}

export default peopleReducer;