import { createSlice } from "@reduxjs/toolkit";

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
        deleteAll: (state) => {
            state.length = 0;
        },
        deleteProduct: (state, action) => {
            return state.filter(
                (product: any) => product._id !== action.payload
            );
        },
    },
});

export const { addToWishList, deleteProduct, deleteAll } =
    wishListSlice.actions;
export default wishListSlice.reducer;
