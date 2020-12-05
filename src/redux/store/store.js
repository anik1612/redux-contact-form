import formReducers from "../reducers/formReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const { createStore, applyMiddleware } = require("redux");


export const store = createStore(formReducers, composeWithDevTools(applyMiddleware(logger)))