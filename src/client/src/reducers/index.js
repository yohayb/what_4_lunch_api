import { combineReducers } from 'redux';
import placesReducer from './places';
import decisionsReducer from './decions';
import peopleReducer from './people';



const rootReducer = combineReducers({
   placesReducer,
   decisionsReducer,
   peopleReducer
});

export default rootReducer;