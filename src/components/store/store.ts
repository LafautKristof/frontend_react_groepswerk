import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsApi from "./productsApi";
import cartApi from "./cartApi";
import wishListSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        wishList: wishListSlice,
        cart: cartSlice,
        quantity: cartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            // logger,
            productsApi.middleware,
            cartApi.middleware
        ),
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    localStorage.setItem("cart", JSON.stringify(state.cart));
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
