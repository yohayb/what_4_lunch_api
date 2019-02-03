
import {
    GET_DECISIONS_REQUEST,
    GET_DECISIONS_SUCCESS,
    GET_DECISIONS_FAILURE,
} from './types';
// Get places
export const getDecisions = () => ({ type: GET_DECISIONS_REQUEST });
export const getDecisionsSuccess = decisions => ({ type: GET_DECISIONS_SUCCESS, decisions });
export const getDecisionsFailed = error => ({ type: GET_DECISIONS_FAILURE, error });
