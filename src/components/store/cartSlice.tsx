import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const savedCart = localStorage.getItem("cart");
const initialState = savedCart !== null ? JSON.parse(savedCart) : [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productExists = state.find(
                (product) => product._id === action.payload._id
            );
            if (productExists) return;
            state.push({
                ...action.payload,
            });
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
