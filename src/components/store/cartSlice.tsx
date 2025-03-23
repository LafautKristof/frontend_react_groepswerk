import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../utils/types";

let persistedCart = localStorage.getItem("cart");
let initialItems: CartItem[] = [];
const initialState: CartState = {
    items: initialItems,
};

if (persistedCart) {
    try {
        const parsed = JSON.parse(persistedCart);

        if (parsed.items && Array.isArray(parsed.items)) {
            initialItems = parsed.items;
        } else if (Array.isArray(parsed)) {
            initialItems = parsed;
        }
    } catch (error) {
        console.error(
            "Fout bij het parsen van de cart uit localStorage:",
            error
        );
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        increment: (state, action: PayloadAction<any>) => {
            const id = action.payload;
            const product = state.items.find(
                (cartItem: any) => cartItem._id === id
            );

            if (product) {
                product.quantity += 1;
            }
        },
        decrement: (state, action: PayloadAction<any>) => {
            const id = action.payload;
            const product = state.items.find(
                (cartItem: any) => cartItem._id === id
            );

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        setCart: (state, action: PayloadAction<any>) => {
            state.items = action.payload;
        },
        deleteProductSlice: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(
                (product: any) => product._id !== id
            );
        },
    },
});

export const { increment, decrement, clearCart, setCart, deleteProductSlice } =
    cartSlice.actions;
export default cartSlice.reducer;
