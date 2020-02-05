import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

//const storeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
	rootReducer,
	//storeEnhancers(applyMiddleWare(preventForbiddenMiddleware, thunk))
);

export default store;