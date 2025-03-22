import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");
const initialState = savedCart !== null ? JSON.parse(savedCart) : [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            console.log("2", action.payload);

            const productExists = state.find(
                (product) => product._id === action.payload._id
            );
            console.log("3", productExists);
            if (productExists) return;
            state.push({ ...action.payload, quantity: 1 });
        },
        increment: (state, action: PayloadAction<any>) => {
            console.log("4", action.payload);
            console.log("state", state);
            const id = action.payload;
            const product = state.find((cartItem: any) => cartItem._id === id);

            if (product) {
                product.quantity += 1;
            }
        },
        decrement: (state, action: PayloadAction<any>) => {
            console.log("4", action.payload);
            console.log("state", state);
            const id = action.payload;
            const product = state.find((cartItem: any) => cartItem._id === id);

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
    },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
