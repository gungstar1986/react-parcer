import {combineReducers, createStore} from "redux"
import replaceReducer from "./replace-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers({
    replacer: replaceReducer
});

const store = createStore(reducers, composeWithDevTools());
export default store
