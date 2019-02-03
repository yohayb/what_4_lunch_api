import { decisionsState } from './initialState';
import {
    GET_DECISIONS_REQUEST,
    GET_DECISIONS_SUCCESS,
    GET_DECISIONS_FAILURE,

} from '../actions';

const decisionsReducer = (state = decisionsState, action) => {
    switch (action.type) {
        case GET_DECISIONS_REQUEST:
            return { ...state, fetching: true, error: null };
        case GET_DECISIONS_SUCCESS:
            return { ...state, fetching: false, decisions: action.decisions };
        case GET_DECISIONS_FAILURE:
            return { ...state, fetching: false, error: action.error };
        default:
            return state;
    }
}

export default decisionsReducer;