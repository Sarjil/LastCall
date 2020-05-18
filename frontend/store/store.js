import { applyMiddleware, createStore } from "redux";
import rootReducer from '../reducers/root_reducer'
import thunk from 'redux-thunk';

const middleware = [thunk];
if(process.env.NODE_ENV !== "production"){
    const {logger} = require("redux-logger");
    middleware.push(logger)
}

export const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middleware))
);

export default configureStore; 