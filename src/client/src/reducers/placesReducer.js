import initialState from './initialState';
import { FETCH_PLACES, RECEIVE_PLACES } from '../actions/actionTypes';

const places = (state = initialState.places, action) => {
    let newState;
    switch (action.type) {
        case FETCH_PLACES:
            console.log('FETCH PLACES Action');
            return action;
        case RECEIVE_PLACES:
            console.log('RECEIVE PLACES Action');
            return newState;
        default:
            return state;
    }
}

export default places;