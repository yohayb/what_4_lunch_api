import { put, call, takeLatest } from 'redux-saga/effects';
import {
    GET_DECISIONS_REQUEST, getDecisionsSuccess, getDecisionsFailed
} from '../actions';
import { getDecisions } from '../services/api';

export function* getDecisionsSaga() {
    try {
        const response = yield call(getDecisions);
        const decisions = yield response.json();
        yield put(getDecisionsSuccess(decisions));
    } catch (error) {
        yield put(getDecisionsFailed(error));
    }
}



export function decisionsSaga() {
    return [
        takeLatest(GET_DECISIONS_REQUEST, getDecisionsSaga)
    ];
}
