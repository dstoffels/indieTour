import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import dates from '../Components/DatesList/redux.js';
import asyncActions from './Middlewares/asyncActions.js';

// REDUCERS
const rootreducer = combineReducers({ dates });

// DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE
const store = createStore(rootreducer, composeEnhancers(applyMiddleware(asyncActions)));

export default store;
