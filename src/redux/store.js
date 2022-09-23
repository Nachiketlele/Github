import { legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { appreducer } from "./appreducer/appreducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
     data: appreducer,
     repo: appreducer
})


export const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))