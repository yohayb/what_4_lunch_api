import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleWare from 'redux-saga';


const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleWare();
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(sagaMiddleWare))
    );
}

export default configureStore;