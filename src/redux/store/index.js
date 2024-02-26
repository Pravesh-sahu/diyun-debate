import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk],
});
export const persistor = persistStore(store);
