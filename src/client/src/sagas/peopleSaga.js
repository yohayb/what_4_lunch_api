import { put, call, takeLatest } from 'redux-saga/effects';
import {
    GET_PEOPLE_REQUEST, getPeopleSuccess, getPeopleFailed,
    ADD_PEOPLE_REQUEST, addPeopleSuccess, addPeopleFailed,
    DELETE_PEOPLE_REQUEST, deletePeopleSuccess, deletePeopleFailed, 
} from '../actions';
import { getPeople, addPeople, deletePeople } from '../services/api';

export function* getPeopleSaga() {
    try {
        const response = yield call(getPeople);
        const people = yield response.json();
        yield put(getPeopleSuccess(people));
    } catch (error) {
        yield put(getPeopleFailed(error));
    }
}

export function* addPeopleSaga(action) {
    try {
        const response = yield call(addPeople, action.person);
        const newPerson = yield response.json();
        if (response.status !== 200) {
            yield put(addPeopleFailed(newPerson.message));
        }
        else {
            yield put(addPeopleSuccess(newPerson));
        }
    } catch (error) {
        yield put(addPeopleFailed(error));

    }
}

export function* deletePeopleSaga(action) {
    try {
        const response = yield call(deletePeople, action.name);
        const deletedPerson = yield response.json();
        yield put(deletePeopleSuccess(deletedPerson.person));
    } catch (error) {
        yield put(deletePeopleFailed(error));
    }
}

export function peopleSaga() {
    return [
        takeLatest(GET_PEOPLE_REQUEST, getPeopleSaga),
        takeLatest(DELETE_PEOPLE_REQUEST, deletePeopleSaga),
        takeLatest(ADD_PEOPLE_REQUEST, addPeopleSaga)
    ];
}
