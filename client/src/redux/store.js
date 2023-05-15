import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./slice";
import { dataApi, paymentgatewayApi } from "./service";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist:['user','address',[paymentgatewayApi.reducerPath]]
};

const persistedStateReducer = persistReducer(persistConfig, stateReducer);
export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    [paymentgatewayApi.reducerPath]: paymentgatewayApi.reducer,
    state: persistedStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([dataApi.middleware, paymentgatewayApi.middleware]),
});

export const persistor = persistStore(store);
