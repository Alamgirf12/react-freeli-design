import { combineReducers } from 'redux';
import convReducer from './convReducer';
import msgReducer from './msgReducer';

const rootReducer = combineReducers({
    convReducer,
    msgReducer
});

export default rootReducer;