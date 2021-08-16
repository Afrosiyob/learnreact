import { applyMiddleware, compose, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import { rootReducers } from "../reducers";
import rootSagas from "../sagas";

const sagaMiddleware = createSagaMiddleware()


const middlewares = [ sagaMiddleware ]

if ( process.env.NODE_ENV === "development" ) {
    const { logger } = require( `redux-logger` );
    middlewares.push( logger );
}


export const store = compose( applyMiddleware( ...middlewares ) )( createStore )( rootReducers )

sagaMiddleware.run( rootSagas )