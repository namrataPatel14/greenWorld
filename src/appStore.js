import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import userReducer from "../src/slices/userSlice"
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";


let persistConfig = {
    key:'root',
    storage: AsyncStorage,
}

let rootReducer = combineReducers({
    user:userReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default appStore;