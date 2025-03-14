import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsApi from "./productsApi";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
