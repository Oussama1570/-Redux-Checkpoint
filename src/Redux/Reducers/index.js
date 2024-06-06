import { combineReducers } from 'redux';
import listReducer from "./listTasks"; 



const rootReducer = combineReducers({ listReducer});

export default rootReducer;

