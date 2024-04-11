import { createStore, combineReducers } from "redux";
import { todos,isLoading } from "./todos/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const reducers = {
  todos,
};

const persistConfig ={
    key:'root',
    storage,
    stateReconcile:autoMergeLevel2
}

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const configureStore = () => createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );
