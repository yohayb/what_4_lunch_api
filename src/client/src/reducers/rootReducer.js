import { combineReducers } from 'redux';
import places from './placesReducer';


const rootReducer = combineReducers({
    places
});

export default rootReducer;