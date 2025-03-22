import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const savedWishlist = localStorage.getItem("wishlist");
const initialState = savedWishlist ? JSON.parse(savedWishlist) : [];
const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const productExists = state.find(
                (product: any) => product._id === action.payload._id
            );
            if (productExists) return;
            state.push({
                ...action.payload,
            });
        },
    },
});

export const { addToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
