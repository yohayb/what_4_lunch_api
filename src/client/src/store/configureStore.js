import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleWare();
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(sagaMiddleWare))
    );

    sagaMiddleWare.run(rootSaga);
    return store;

}

export default configureStore;