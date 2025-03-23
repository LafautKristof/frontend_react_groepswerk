import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsApi from "./productsApi";
import cartApi from "./cartApi";
import authApi from "./authApi";
import wishListSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const persistedCart = localStorage.getItem("cart");
const preloadedCart = persistedCart ? JSON.parse(persistedCart) : { items: [] };

const preloadedState = {
    cart: preloadedCart,
    wishList: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};
export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        wishList: wishListSlice,
        cart: cartSlice,
        quantity: cartSlice,
        auth: authSlice,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            // logger,
            productsApi.middleware,
            cartApi.middleware,
            authApi.middleware
        ),
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    localStorage.setItem("cart", JSON.stringify(state.cart));
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
