import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import guaranteedReducer from "./guaranteed/guaranteedSlice";
import featuredCategoryReducer from "./featured/featuredCategorySlice"
import opinionReducer from "./opinion/OpinionSlice"

const reducers = combineReducers({
    guaranteed : guaranteedReducer,
    featuredCategory: featuredCategoryReducer,
    opinion : opinionReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],
};

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer : persistedReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);