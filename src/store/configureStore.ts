import { createStore, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from './reducer';
import { AppState } from './types';

import AuthSagas from './Auth/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const isProduction = false;
const middleware: Middleware[] = [];

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

export default function configureStore(initialState: AppState) {
    const enhancer = isProduction
        ? applyMiddleware(...middleware)
        : composeWithDevTools(applyMiddleware(...middleware));

    const store = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(AuthSagas);

    return store;
}