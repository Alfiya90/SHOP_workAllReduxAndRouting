import {combineReducers, legacy_createStore} from "redux";
import basketReducer from "./basketReducer";

let reducers = combineReducers({
    basketPage: basketReducer
});


let store = legacy_createStore(reducers);

export default store;