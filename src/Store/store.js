import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ajaxReducer from "../Reducers/ajaxReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Components/Actions/SagaAction/rootSaga";
import nameLocRed from "../ReduxToolKit/slice";

const saga=createSagaMiddleware()

const rootReducer=combineReducers({
    ajax:ajaxReducer,
    nameLoc:nameLocRed
})

const store=configureStore({
    reducer:rootReducer,
    middleware:[logger,thunk,saga]
})
saga.run(rootSaga)

export default store;