import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsApi from "./productsApi";
import wishListSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        wishList: wishListSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, productsApi.middleware),
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    localStorage.setItem("cart", JSON.stringify(state.cart));
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
