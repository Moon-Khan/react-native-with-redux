import { combineReducers } from 'redux';
import counterSlice from './slice';

const rootReducer = combineReducers({
    counter: counterSlice,
});

export default rootReducer;
