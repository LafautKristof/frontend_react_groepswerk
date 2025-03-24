import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "../../utils/types";

const initialState: AuthState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            localStorage.removeItem("user");
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
