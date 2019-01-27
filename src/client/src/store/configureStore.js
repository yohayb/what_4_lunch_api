import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleWare from 'redux-saga';
import { getPlacesWatcherSaga, addPlaceWatcherSaga, deletePlaceWatcherSaga } from '../sagas/placesSagas';

const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleWare();
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(sagaMiddleWare))
    );

    sagaMiddleWare.run(getPlacesWatcherSaga);
    sagaMiddleWare.run(addPlaceWatcherSaga);
    sagaMiddleWare.run(deletePlaceWatcherSaga);
    return store;

}

export default configureStore;