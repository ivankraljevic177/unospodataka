import { combineReducers } from 'redux';
import clients from './client';


let reducers = {
 clients
};

const rootReducer = combineReducers(reducers);

export default rootReducer;