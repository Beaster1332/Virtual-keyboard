import { combineReducers, legacy_createStore as createStore } from 'redux';
import keyboardReducer from './keyboardReducer';

const reducers = combineReducers({
    keyboardReducer
});

const store = createStore(reducers);

export default store;