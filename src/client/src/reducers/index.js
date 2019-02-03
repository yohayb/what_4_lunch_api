import { combineReducers } from 'redux';
import placesReducer from './places';
import decisionsReducer from './decions';


const rootReducer = combineReducers({
   placesReducer,
   decisionsReducer
});

export default rootReducer;